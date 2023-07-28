import {
  globalErrorAction,
  globalLoadingAction,
  globalSuccessAction,
} from '../store/global.slice';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { SIGNIN_ROUTE } from '../../utils/routes';
import { useAppSelector, useAppDispatch } from './hooks';
import { queryBuilder } from '../helper/query_builder.helper';
import { userLogoutAction } from '../store/user_profile.slice';
import { capitalizeWords } from '../helper/user_functions.helper';

const BASE_URL = "http://18.206.93.127";
  // 'http://simone-api-dev-django.eba-qt3t32fm.us-east-1.elasticbeanstalk.com/api/v1';

interface RequestPayload {
  query?: { [key: string]: any };
  successMessage?: string;
  errorMessage?: string;
  showSuccessMessage?: boolean;
  showErrorMessage?: boolean;
  showLoader?: boolean;
  contentType?: string;
  useBaseUrl?: boolean;
  retries?: number;
  redirectOn401?: boolean;
  bearer?: boolean;
}

interface GetRequestPayload extends RequestPayload {
  method?: 'GET';
}

type TOtherRequestType = 'POST' | 'DELETE' | 'PUT' | 'PATCH';

interface BodyRequestPayload extends RequestPayload {
  method?: TOtherRequestType;
  body: { [key: string]: any };
}

interface FormDataRequestPayload extends RequestPayload {
  method?: TOtherRequestType;
  formData: { [key: string]: any };
}

export interface IResponse {
  loading: boolean;
  error: boolean;
  success: boolean;
  data?: { [key: string]: any } | null;
  message: string;
  status?: number | string | null;
}

const initialState: IResponse = {
  loading: false,
  error: false,
  success: false,
  data: null,
  message: '',
  status: null,
};

// const { state: { data, loading }, makeRequest } = useRequest();
// const { state: { data: profileData, loading: profileLoading }, makeRequest: profileRequest } = useRequest();
/* makeRequest('/profile', {
  query: {
    searcText: ''',
    pageSzie: 9
  }
})
*/
export const useRequest = () => {
  const [state, setState] = useState({ ...initialState });
  const { token } = useAppSelector((state: { profileSliceReducer: any; }) => state.profileSliceReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let retries: number = 1;

  const makeRequest = useCallback(
    async (
      url: string,
      config?: GetRequestPayload | BodyRequestPayload | FormDataRequestPayload
    ) => {
      try {
        const formData = new FormData();
        const payloadFormData = (config as FormDataRequestPayload)?.formData;
        const allowBearer =
          typeof config?.bearer !== 'undefined' ? config?.bearer : true;

        const headers: any = {
          Authorization: allowBearer ? `Bearer ${token}` : '',
          'Content-Type': config?.contentType || 'application/json',
        };

        if (payloadFormData) {
          delete headers['Content-Type'];
          for (let key in payloadFormData) {
            if (payloadFormData[key] instanceof FileList) {
              for (
                let count = 0;
                count < payloadFormData[key].length;
                count++
              ) {
                formData.append(key, payloadFormData[key].item(count));
              }
              continue;
            }
            formData.append(key, payloadFormData[key]);
          }
        }
        if (typeof config?.retries !== 'undefined') retries = config.retries;

        setState((prevState) => ({
          ...prevState,
          loading: true,
        }));
        // show loader if showLoader not set to false
        if (config?.showLoader !== false) {
          dispatch(globalLoadingAction(true));
        }

        const response = await fetch(
          `${config?.useBaseUrl !== false ? BASE_URL : ''}${url}${queryBuilder(
            config?.query
          )}`,
          {
            headers: headers,
            method:
              config?.method ||
              ((config as BodyRequestPayload)?.body ||
              (config as FormDataRequestPayload)?.formData
                ? 'POST'
                : 'GET'),
            body: payloadFormData
              ? formData
              : (config as BodyRequestPayload)?.body &&
                JSON.stringify((config as BodyRequestPayload).body),
          }
        );

        if (config?.showLoader !== false) {
          dispatch(globalLoadingAction(false));
        }

        if (response.ok) {
          const responsePayload = await response.json();
          const successMessage =
            config?.successMessage ||
            responsePayload.message ||
            'Request Successful';
          if (config?.showSuccessMessage) {
            dispatch(globalSuccessAction(successMessage));
          }
          const newState = {
            ...state,
            loading: false,
            success: true,
            data: responsePayload,
            message: successMessage,
          };
          setState(newState);
          console.log(newState);
          return newState;
        } else {
          let errorPayload: any = JSON.parse((await response.text()) || '{}');

          let error400Message =
            response.status === 400 &&
            Object.values(errorPayload?.errors).reduce(
              (previousValue, currentValue: any) => {
                return `${previousValue}${previousValue ? ',' : ''} ${
                  currentValue[0]
                }`;
              },
              ''
            );
          let batchCreateTerminalError = Array.isArray(errorPayload?.errors)
            ? `${capitalizeWords(
                Object.keys(errorPayload?.errors[0]).join().split('_').join(' ')
              )}: 
              ${Object.values(errorPayload?.errors[0]).join()}  
              Check details and try again`
            : '';

          const errorMessage =
            config?.errorMessage ||
            (response.status === 401 && errorPayload?.detail
              ? `${errorPayload?.detail}. Check details and try again`
              : response.status === 401 && !errorPayload?.detail
              ? 'Expired/Invalid Login Credentials'
              : response.status === 400 && url === '/tms/terminals/bulk-create/'
              ? batchCreateTerminalError
              : response.status === 400 && error400Message
              ? `${error400Message}`
              : response.status === 400 && !error400Message
              ? 'Incorrect request, check the provided details and try again'
              : typeof response.status === 'undefined'
              ? 'An error occur, It could be your network connectivity. Check & try again.'
              : typeof errorPayload === 'string'
              ? errorPayload
              : 'An error occur, check details and try again');

          if (config?.showErrorMessage !== false) {
            dispatch(globalErrorAction(errorMessage));
          }

          if (response.status === 401 && config?.redirectOn401 !== false) {
            // navigate(SIGNIN_ROUTE);
            dispatch(userLogoutAction());
          }
          const newState = {
            ...state,
            ...initialState,
            error: true,
            message: errorMessage,
            data: errorPayload,
          };
          setState(newState);
          return newState;
        }
      } catch (err: any) {
        if (retries) {
          --retries;
          makeRequest(url, { ...config, retries });
          return;
        }

        const message =
          err.message ||
          'An error occur, It could be your network connectivity. Check & try again.';

        setState((prevState) => ({
          ...prevState,
          ...initialState,
          error: true,
          message,
        }));
        dispatch(globalErrorAction(message));
        dispatch(globalLoadingAction(false));
      }
    },
    [token]
  );

  return { state, makeRequest };
};

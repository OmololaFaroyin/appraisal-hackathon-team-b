import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getItem, saveItem, deleteItem } from '../helper/storage.helper';
// import jwt_decode from 'jwt-decode';

export const userProfileSliceName = 'profileSliceReducer';
const userProfileStorageName = 'profile';

export interface IProfile {
  user_id?: string;
  workspace?: string;
  // role?: string;
  refresh_token: string;
  token?: string;
  user: {
    created_at: string;
    email: string;
    first_name: string;
    id: string;
    last_name: string;
    middle_name: null;
    phone_number: string;
    updated_at: string;
    username: string;
    username_updates: number;
  }
}

const initialState: IProfile = {
  user_id: '',
  workspace: '',
  // role: '',
  refresh_token: '',
  token: '',
  user: {
    created_at: '',
    email: '',
    first_name: '',
    id: '',
    last_name: '',
    middle_name: '',
    phone_number: '',
    updated_at: '',
    username: '',
    username_updates: 0,
  },
  ...(getItem(userProfileStorageName) || {}),
};

export const userProfileSlice = createSlice({
  name: userProfileSliceName,
  initialState,
  reducers: {
    userLoginAction(state: any, action: PayloadAction<{ [key: string]: any }>) {
      // let profile: any = jwt_decode(action?.payload?.token?);
      let profile: any = action?.payload?.token;
      saveItem(userProfileStorageName, { ...action.payload, profile });
      return { ...state, ...action.payload, profile };
    },
    userLogoutAction(): any {
      deleteItem(userProfileStorageName);
      return {};
    },
    userUpdateProfileAction(
      state: any,
      action: PayloadAction<{ [key: string]: any }>
    ) {
      saveItem(userProfileStorageName, { ...state, ...action.payload });
      return { ...state, ...action.payload };
    },
  },
});

export const { userLoginAction, userLogoutAction, userUpdateProfileAction } =
  userProfileSlice.actions;

export default userProfileSlice.reducer;

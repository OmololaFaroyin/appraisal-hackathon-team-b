import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const globalSliceName = 'globalSliceReducer';
interface IState {
  error: boolean;
  success: boolean;
  message: string;
  loading: boolean;
  activeDropDownId?: string;
}
const initialState: IState = {
  error: false,
  success: false,
  message: '',
  loading: false,
};

export const globalSlice = createSlice({
  name: globalSliceName,
  initialState,
  reducers: {
    globalLoadingAction(state: any, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    globalDropDownAction(state: any, action: PayloadAction<string>) {
      state.activeDropDownId = action.payload;
    },
    globalErrorAction(state: any, action: PayloadAction<string>) {
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    globalSuccessAction(state: any, action: PayloadAction<string>) {
      state.error = false;
      state.success = true;
      state.message = action.payload;
    },
    globalResetAction() {
      return initialState;
    },
  },
});

export const {
  globalErrorAction,
  globalSuccessAction,
  globalResetAction,
  globalLoadingAction,
  globalDropDownAction,
} = globalSlice.actions;

export default globalSlice.reducer;

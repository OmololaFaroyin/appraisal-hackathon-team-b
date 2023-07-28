import { configureStore } from '@reduxjs/toolkit';
import globalReducer, { globalSliceName } from './global.slice';
import userProfileReducer, { userProfileSliceName } from './user_profile.slice';

const store = configureStore({
  reducer: {
    [globalSliceName]: globalReducer,
    [userProfileSliceName]: userProfileReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

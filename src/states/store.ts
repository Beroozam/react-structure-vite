import {
  configureStore,
  isRejectedWithValue,
  isPending,
  isAsyncThunkAction,
  isFulfilled
} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import {logoutAction} from "components/authentication/slice"
import {baseApi} from "states/baseApi";
import appSlice, {backDropAction} from 'states/slice'

const authMiddleware = api  => next => action => {
  if (isRejectedWithValue(action)) {
    if (action.payload.status === 401) {
      api.dispatch(logoutAction());
    }else{
      toast.error(`${action.payload.status} | ${((Array.isArray(action.payload.data) || typeof action.payload.data==="object") && Object.values(action.payload.data)) || action.payload.data}`)
    }
  }
  if (isAsyncThunkAction(action)){
    // @ts-ignore
    if (action.meta.arg.endpointName!=="search") api.dispatch(backDropAction(isPending(action)))
    isFulfilled(action) && action.meta.arg.type==="mutation" && action.meta.arg?.endpointName!=="login"  && action.meta.arg?.endpointName!=="user" && setTimeout(()=>{toast.success("Done successfully.")},0)
  }
  return next(action);
};

export const store = configureStore({
  reducer: {
    app: appSlice,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(authMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
import balance from '../features/api/balanceSlice.js';
import quote from '../features/quote/quoteSlice.js';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    balance,
    quote
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


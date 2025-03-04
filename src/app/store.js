import balance from '../features/api/balanceSlice.js';
import quote from '../features/quote/quoteSlice.js';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    balance,
    quote
  },
})

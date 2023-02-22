import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartReducer';

// export const store = configureStore({
//     reducer: {cart: cartReducer},
// }) 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,

 
} from 'redux-persist'


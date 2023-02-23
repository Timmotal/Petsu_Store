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
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react' 
//we are going to be using this in our index file ( what exactly i do not know)

// import App from './App'
// import rootReducer from './reducers' // we do not need these
// WE ARE GOING TO WRAP OUR APP USING INDEX JS

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer) //we dont have any other reducer we can pass in cartReducer

export const store = configureStore({

})




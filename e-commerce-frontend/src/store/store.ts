import { configureStore } from "@reduxjs/toolkit";
import adderReducer from './cartSlice';

export const store = configureStore({
    reducer : {
        adder: adderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
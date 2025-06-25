import { configureStore } from "@reduxjs/toolkit";
import { addedToCart } from './cartSlice';

export const store = configureStore({
    reducer : {
        adder: addedToCart.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
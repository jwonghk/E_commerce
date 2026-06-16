import { configureStore } from "@reduxjs/toolkit";
//import { addedToCart } from './cartSlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer : {
        //adder: addedToCart.reducer,
        cart: cartReducer,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const {userame, email} = useSelector((state : RootState) => state.user);
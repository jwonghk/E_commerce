import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface Product {
    id : number,
    name : string,
    category : string,
    price : string,
    image : string,
    description : string
}

interface CartState {
    items : Product[],
}

const initialState: CartState = {
    items : [],
}

export const addedToCart = createSlice({
    name: 'adder',

    initialState,

    reducers: {
        toggleItem: (state, action: PayloadAction<Product>) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index >= 0) {
                state.items.splice( index, 1);
            } else {
                state.items.push(action.payload);
            }
        },

        /*
        adding : state => {
                state.value = true
            },

        removing : state => {
                state.value = false
        }*/
    }

});

// export the actions 
export const {toggleItem} = addedToCart.actions;

export default addedToCart.reducer;
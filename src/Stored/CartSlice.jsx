import {createSlice} from '@reduxjs/toolkit'

const cart = createSlice({
    name: 'CartSliceName',
    initialState: {
        orderCart: [],
        count: 0
    },
    reducers:{
        addItems: (initialState, action) => {
            initialState.orderCart.push({...action.payload, quantity: 1});
            initialState.count += 1;
        },
        quantityIncrease: (initialState, action) => {
            const element = initialState.orderCart.find((ele) => ele.id === action.payload.id);
            element.quantity += 1;
            initialState.count += 1;
        },
        quantityDecrease: (initialState, action) => {
            const element = initialState.orderCart.find((ele) => ele.id === action.payload.id);
            if (element.quantity == 1) {
                initialState.orderCart = initialState.orderCart.filter((ele) => ele.id !== action.payload.id)
            }
            else {
                element.quantity -= 1;
            }    
            initialState.count -= 1;       
        }
    }
})

export const {addItems, quantityIncrease, quantityDecrease} = cart.actions // For Use at any Components
export default cart.reducer // For Store
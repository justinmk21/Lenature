import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            // Update totals
            state.totalPrice += action.payload.price;
            state.totalItems += 1;
        },
        removeItemFromCart(state, action) {
            const itemToRemove = state.cartItems.find(item => item.id === action.payload);
            if (itemToRemove) {
                state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
                state.totalItems -= itemToRemove.quantity;
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            }
        },
        clearCart(state) {
            state.cartItems = [];
            state.totalPrice = 0;
            state.totalItems = 0;
        },
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
                state.totalPrice += itemToIncrease.price;
                state.totalItems += 1;
            }
        },
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
                state.totalPrice -= itemToDecrease.price;
                state.totalItems -= 1;
            }
        },
    },
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
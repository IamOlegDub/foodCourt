import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "@cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, shop, count } = action.payload;
            const hasItem = state.cartItems.findIndex((item) => item.id === id);
            if (state.cartItems.length > 0) {
                const cartShop = state.cartItems[0].shop;
                if (cartShop !== shop) return;
            }
            hasItem === -1
                ? state.cartItems.push(action.payload)
                : (state.cartItems[hasItem].count += count);
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const indexItem = state.cartItems.findIndex(
                (item) => item.id === id
            );
            if (indexItem !== -1) {
                state.cartItems.splice(indexItem, 1);
            }
        },
        addOneToCart: (state, action) => {
            const { id, count } = action.payload;
            const hasItem = state.cartItems.findIndex((item) => item.id === id);
            state.cartItems[hasItem].count = count + 1;
        },
        removeOneFromCart: (state, action) => {
            const { id, count } = action.payload;
            const hasItem = state.cartItems.findIndex((item) => item.id === id);

            state.cartItems[hasItem].count = count - 1;
            if (count < 2) {
                state.cartItems[hasItem].count = 1;
            }
        },
    },
});

export const { addToCart, removeFromCart, addOneToCart, removeOneFromCart } =
    cartSlice.actions;
export default cartSlice.reducer;

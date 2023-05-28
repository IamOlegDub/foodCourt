import { configureStore } from "@reduxjs/toolkit";
import cart from "../reducers/cartSlice";

export const store = configureStore({
    reducer: {
        cart,
    },
});

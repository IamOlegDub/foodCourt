import { createContext, useState } from "react";

export const activeShopContext = createContext();

export const ActiveShopProvider = (props) => {
    const [activeShop, setActiveShop] = useState(1);

    const val = {
        activeShop,
        setActiveShop,
    };

    return (
        <activeShopContext.Provider value={val}>
            {props.children}
        </activeShopContext.Provider>
    );
};

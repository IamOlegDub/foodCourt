import { useContext } from "react";
import { shops } from "../../data/shops";
import { Shop } from "../Shop/Shop";
import styles from "./ShopList.module.scss";
import { activeShopContext } from "../../context/activeShopContext";

export const ShopList = () => {
    const { activeShop, setActiveShop } = useContext(activeShopContext);
    const makeActiveHandler = (id) => {
        setActiveShop(id);
    };
    return (
        <ul className={styles.shopList}>
            {shops.map((shop) => (
                <Shop
                    key={shop.id}
                    shop={shop}
                    activeShop={activeShop}
                    makeActiveHandler={makeActiveHandler}
                />
            ))}
        </ul>
    );
};

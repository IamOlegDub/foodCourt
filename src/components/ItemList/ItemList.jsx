import { useContext } from "react";
import { items } from "../../data/items";
import styles from "./ItemList.module.scss";
import { Item } from "../Item/Item";
import { activeShopContext } from "../../context/activeShopContext";

export const ItemList = () => {
    const { activeShop } = useContext(activeShopContext);
    return (
        <ul className={styles.itemList}>
            {items
                .filter((item) => item.shop === activeShop)
                .map((item) => (
                    <Item key={item.id} item={item} />
                ))}
        </ul>
    );
};

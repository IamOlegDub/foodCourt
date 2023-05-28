import cn from "classnames";

import styles from "./Shop.module.scss";

export const Shop = ({ shop, makeActiveHandler, activeShop }) => (
    <li
        className={cn(styles.shop, {
            [styles.shopActive]: activeShop === shop.id,
        })}
        onClick={() => makeActiveHandler(shop.id)}
    >
        {shop.name}
    </li>
);

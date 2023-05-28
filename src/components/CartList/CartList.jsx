import { useSelector } from "react-redux";
import { CartItem } from "../CartItem/CartItem";
import styles from "./CartList.module.scss";

export const CartList = () => {
    const { cartItems } = useSelector((state) => state.cart);

    return (
        <ul className={styles.cartList}>
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
        </ul>
    );
};

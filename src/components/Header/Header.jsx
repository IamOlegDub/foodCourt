import { Link } from "react-router-dom";

import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";
import { ReactComponent as FoodIcon } from "../../assets/foodIcon.svg";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

export const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    console.log(cartItems);
    const totalQuantity = cartItems.reduce(
        (sum, cartItem) => sum + cartItem.count,
        0
    );
    const totalValue = cartItems.reduce(
        (sum, cartItem) => sum + cartItem.count * cartItem.price,
        0
    );
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link to="/">
                    <div className={styles.logo}>
                        <FoodIcon />
                        <div>FoodCourt</div>
                    </div>
                </Link>
                <Link to={cartItems.length > 0 && "/cart"}>
                    <div className={styles.cartButtonWrapper}>
                        {cartItems.length > 0 && (
                            <div className={styles.totalValue}>
                                ${totalValue}
                            </div>
                        )}
                        <CartIcon />
                        {cartItems.length > 0 && (
                            <>
                                <div className={styles.cartIconTag}>
                                    {totalQuantity}
                                </div>
                            </>
                        )}
                    </div>
                </Link>
            </div>
        </header>
    );
};

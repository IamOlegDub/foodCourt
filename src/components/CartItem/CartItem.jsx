import cn from "classnames";
import { useDispatch } from "react-redux";
import {
    addOneToCart,
    removeFromCart,
    removeOneFromCart,
} from "../../reducers/cartSlice";
import { ReactComponent as CloseIcon } from "../../assets/closeIcon.svg";
import { ReactComponent as PlusIcon } from "../../assets/plusIcon.svg";
import { ReactComponent as MinusIcon } from "../../assets/minusIcon.svg";
import styles from "./CartItem.module.scss";

export const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const handlerRemoveFromCart = () => {
        dispatch(removeFromCart(cartItem));
    };
    const handlerAddOneToCart = () => {
        dispatch(addOneToCart(cartItem));
    };
    const handlerRemoveOneFromCart = () => {
        dispatch(removeOneFromCart(cartItem));
    };

    return (
        <li className={styles.cartItem}>
            <div className={styles.imgWrapper}>
                <img src={cartItem.image} alt={cartItem.name} />
            </div>
            <h4 className={styles.name}>{cartItem.name}</h4>
            <div className={styles.price}>Price: ${cartItem.price}</div>
            <div className={styles.counter}>
                <button
                    className={cn(styles.sign, {
                        [styles.disabled]: cartItem.count === 1,
                    })}
                    onClick={handlerRemoveOneFromCart}
                >
                    <MinusIcon />
                </button>
                <div className={styles.count}>{cartItem.count}</div>
                <button className={styles.sign} onClick={handlerAddOneToCart}>
                    <PlusIcon />
                </button>
            </div>
            <div className={styles.value}>
                Value: ${cartItem.price * cartItem.count}
            </div>
            <div onClick={handlerRemoveFromCart} className={styles.remove}>
                <CloseIcon />
            </div>
        </li>
    );
};

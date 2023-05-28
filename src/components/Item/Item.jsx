import { useDispatch } from "react-redux";
import { CartButton } from "../CartButton";
import styles from "./Item.module.scss";
import { addToCart } from "../../reducers/cartSlice";

export const Item = ({ item }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const cartItem = {
            id: Number(item.id),
            shop: item.shop,
            name: item.name,
            price: Number(item.price),
            image: item.image,
            count: 1,
        };
        dispatch(addToCart(cartItem));
    };

    return (
        <div className={styles.item}>
            <div className={styles.imgWrapper}>
                <img src={item.image} alt={item.name} />
            </div>
            <h4 className={styles.name}>{item.name}</h4>
            <div className={styles.price}>{item.price}$</div>
            <CartButton onClick={handleAddToCart}>add to Cart</CartButton>
        </div>
    );
};

import { useSelector } from "react-redux";
import { CartButton } from "../../components/CartButton/CartButton";
import { CartList } from "../../components/CartList/CartList";
import { Form } from "../../components/Form/Form";
import { Section } from "../../components/Section/Section";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from "./Cart.module.scss";

export const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);

    const totalValue = cartItems.reduce(
        (sum, cartItem) => sum + cartItem.count * cartItem.price,
        0
    );

    return (
        <div className={styles.cart}>
            <Sidebar>
                <Form />
            </Sidebar>
            <Section>
                {cartItems.length > 0 ? (
                    <>
                        <CartList />
                        <div className={styles.summery}>
                            <div className={styles.totalValueText}>
                                Total Value: {totalValue}
                            </div>
                            <CartButton>Submit</CartButton>
                        </div>
                    </>
                ) : (
                    <div className={styles.emptyCart}>Корзина порожня</div>
                )}
            </Section>
        </div>
    );
};

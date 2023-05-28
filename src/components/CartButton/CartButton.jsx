import styles from "./CartButton.module.scss";

export const CartButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className={styles.cartButton}>
            {children}
        </button>
    );
};

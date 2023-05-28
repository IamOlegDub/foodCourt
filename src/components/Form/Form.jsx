import styles from "./Form.module.scss";

export const Form = () => {
    return (
        <form id="cartForm" className={styles.form}>
            <div className={styles.formElement}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    autoFocus
                    placeholder="Name..."
                />
            </div>
            <div className={styles.formElement}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email..."
                />
            </div>
            <div className={styles.formElement}>
                <label htmlFor="tel">Phone:</label>
                <input id="tel" name="tel" type="tel" placeholder="Phone..." />
            </div>
            <div className={styles.formElement}>
                <label htmlFor="address">Address:</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Address..."
                />
            </div>
        </form>
    );
};

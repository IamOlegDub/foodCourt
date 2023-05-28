import styles from "./Sidebar.module.scss";

export const Sidebar = ({ children }) => (
    <aside className={styles.sidebar}>{children}</aside>
);

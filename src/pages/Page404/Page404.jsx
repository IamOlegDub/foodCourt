import { Link } from "react-router-dom";
import styles from "./Page404.module.scss";

export const Page404 = () => (
    <div className={styles.page404}>
        <div>This page was not found</div>
        <Link to="/">Back to Home</Link>
    </div>
);

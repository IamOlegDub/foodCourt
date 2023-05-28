import { ItemList } from "../../components/ItemList/ItemList";
import { Section } from "../../components/Section/Section";
import { ShopList } from "../../components/ShopList/ShopList";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from "./Main.module.scss";

export const Main = () => (
    <div className={styles.main}>
        <Sidebar>
            <div className={styles.shopsTitle}>Shops:</div>
            <ShopList />
        </Sidebar>
        <Section>
            <ItemList />
        </Section>
    </div>
);

import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";


export default function Checkout() {
    return (
        <div className={styles.page}>
            <Header />
            <CheckoutForm />
        </div>
    );
}

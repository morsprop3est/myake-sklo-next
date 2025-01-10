import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ConsentBanner from "@/components/ConsentBanner/ConsentBanner";

export const metadata = {
    title: "Оформлення замовлення",
    description: "Сторінка для оформлення замовлення",
};

export default function CheckoutLayout({ children }) {
    return (
        <div>
            <ConsentBanner />
            <main>{children}</main>
        </div>
    );
}

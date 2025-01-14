// CheckoutLayout.js
import { CartProvider } from '@/context/cartProvider';

export const metadata = {
    title: "Оформлення замовлення",
    description: "Сторінка для оформлення замовлення",
};

export default function CheckoutLayout({ children }) {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    );
}

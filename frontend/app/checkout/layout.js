import { CartProvider } from '@/context/cartProvider';

export const metadata = {
    title: "Оформлення замовлення",
    description: "Сторінка для оформлення замовлення",
};

export default function CheckoutLayout({ children }) {
    return (
        <html lang="ua">
            <body>
            <CartProvider>
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}

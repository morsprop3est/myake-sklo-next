'use client';

import React, { useState, useEffect } from "react";
import { fetchCities } from "@/api/cities";
import { fetchPostOffices } from "@/api/postOffices";
import { submitOrder } from "@/api/order";
import styles from "./CheckoutForm.module.scss";
import Image from "next/image";
import useCart from '@/hooks/useCart';

const CheckoutForm = () => {
    const { loadCartFromLocalStorage, syncCartWithBackend, getSession } = useCart();
    const [cityQuery, setCityQuery] = useState("");
    const [suggestedCities, setSuggestedCities] = useState([]);
    const [postOffices, setPostOffices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const [order, setOrder] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        city: "",
        post_office_id: "",
        post_office_address: "",
        post_office_ref: "",
        products: [],
        total_price: 0,
        payment_type: "",
        payment_status: "not_paid",
        delivery_type: "",
        comments: "",
        session_id: "" 
    });

    useEffect(() => {
        syncCartWithBackend();
        const cartProducts = loadCartFromLocalStorage();
        const totalPrice = cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
        const session_id = getSession();
        setOrder((prevOrder) => ({
            ...prevOrder,
            products: cartProducts,
            total_price: totalPrice,
            session_id 
        }));
    }, []);

    const handleCityInputChange = (e) => {
        const query = e.target.value;
        setCityQuery(query);

        if (query.length < 3) {
            setSuggestedCities([]);
            return;
        }

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        setDebounceTimeout(
            setTimeout(() => {
                fetchCities(query).then(setSuggestedCities).catch(console.error);
            }, 500)
        );
    };

    const handleCitySelect = async (city) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            city: city.description,
        }));
        setCityQuery(city.description);
        setSuggestedCities([]);

        try {
            const postOffices = await fetchPostOffices(city.city_ref);
            setPostOffices(postOffices);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePostOfficeChange = (e) => {
        const selectedPostOfficeId = e.target.value;
        const selectedPostOffice = postOffices.find(office => office.id === parseInt(selectedPostOfficeId));

        setOrder((prevOrder) => ({
            ...prevOrder,
            post_office_id: selectedPostOfficeId,
            post_office_address: selectedPostOffice ? selectedPostOffice.description : "",
            post_office_ref: selectedPostOffice ? selectedPostOffice.ref : "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitOrder(order);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrder((prevOrder) => {
            let newOrder = { ...prevOrder, [name]: value };
            if (name === "payment_type") {
                newOrder.delivery_type = value === "prepayment" ? "pickup" : "nova_poshta";
            }
            return newOrder;
        });
    };

    return (
        <div className={styles.checkoutFormWrapper}>
            <div className={styles.container}>
                <form className={styles.checkoutForm} onSubmit={handleSubmit}>
                    <h1>Оформлення замовлення</h1>
                    <div className={styles.personalInfo}>
                        <h2>Особиста інформація</h2>
                        <label>
                            Ваше ім’я
                            <input
                                type="text"
                                name="first_name"
                                placeholder="Введіть ім’я"
                                value={order.first_name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Ваше прізвище
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Введіть прізвище"
                                value={order.last_name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Ваша пошта
                            <input
                                type="email"
                                name="email"
                                placeholder="Введіть пошту"
                                value={order.email}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Ваш номер телефону
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Введіть номер телефону"
                                value={order.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <h2>Спосіб оплати</h2>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="payment_type"
                                    value="wayforpay"
                                    checked={order.payment_type === "wayforpay"}
                                    onChange={handleInputChange}
                                    required
                                />
                                Повна оплата через WayForPay (Visa, Mastercard)
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="payment_type"
                                    value="prepayment"
                                    checked={order.payment_type === "prepayment"}
                                    onChange={handleInputChange}
                                />
                                Передплата 200 грн (решту оплачуєте при отриманні)
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="payment_type"
                                    value="fop"
                                    checked={order.payment_type === "fop"}
                                    onChange={handleInputChange}
                                />
                                Оплата на рахунок ФОП
                            </label>
                        </div>
                    </div>

                    <div className={styles.deliveryInfo}>
                        <div className={styles.deliveryHeader}>
                            <Image
                                src={"/images/nova-post.png"}
                                alt={"nova-post-logo"}
                                className={styles.deliveryPhoto}
                                width={50}
                                height={50}
                                loading="lazy"
                            />
                            <h2>Дані доставки</h2>
                        </div>
                        <label className={styles.label}>
                            Місто
                            <input
                                type="text"
                                placeholder="Введіть місто"
                                value={cityQuery}
                                onChange={handleCityInputChange}
                                required
                                className={styles.input}
                            />
                            {suggestedCities.length > 0 && (
                                <ul className={styles.suggestedCitiesList}>
                                    {suggestedCities.map((city) => (
                                        <li
                                            key={city.id}
                                            onClick={() => handleCitySelect(city)}
                                            className={styles.cityOption}
                                        >
                                            {city.description} - {city.settlement_type_description}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </label>

                        <label className={styles.label}>
                            Відділення
                            <select
                                name="post_office_id"
                                value={order.post_office_id}
                                onChange={handlePostOfficeChange}
                                required
                                className={styles.select}
                            >
                                <option value="">Оберіть відділення</option>
                                {postOffices.length > 0 ? (
                                    postOffices.map((office) => (
                                        <option key={office.id} value={office.id}>
                                            {office.description}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>Немає відділень</option>
                                )}
                            </select>
                        </label>
                    </div>

                    <div className={styles.orderInfo}>
                        <h2>Замовлення</h2>
                        {order.products.map((product, index) => (
                            <div key={index}>
                                <p>
                                    <strong>Назва продукту:</strong> {product.product_name}
                                </p>
                                <p>
                                    <strong>Ціна:</strong> {product.price} грн
                                </p>
                                <p>
                                    <strong>Кількість:</strong> {product.quantity}
                                </p>
                                <p>
                                    <strong>Розміри:</strong> {product.dimensions.width}см x {product.dimensions.height}см
                                    {product.dimensions.radius && `, Радіус: ${product.dimensions.radius}см`}
                                </p>
                                <p>
                                    <strong>Тип скла:</strong> {product.glass_type}
                                </p>
                                <p>
                                    <strong>Товщина скла:</strong> {product.glass_thickness}
                                </p>
                                <p>
                                    <strong>Форма:</strong> {product.shape}
                                </p>
                            </div>
                        ))}
                        <p>
                            <strong>Загальна сума:</strong> {order.total_price} грн
                        </p>

                        <h2>Додаткова інформація</h2>
                        <label>
                            Коментар до замовлення (необов’язково)
                            <textarea
                                name="comments"
                                placeholder="Введіть коментар"
                                value={order.comments}
                                onChange={handleInputChange}
                            ></textarea>
                        </label>

                        <button type="submit" className={styles.submitButton}>
                            Підтвердити замовлення
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;
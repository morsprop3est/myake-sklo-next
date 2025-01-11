'use client';

import React, { useState } from "react";
import axios from "axios";
import styles from "./CheckoutForm.module.scss";
import Image from "next/image";

const CheckoutForm = () => {
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
        products: [
            { name: "М'яке скло", size: "120смх140см", thickness: "1.5мм" }
        ],
        total_price: 199.2,
        payment_type: "",
        delivery_type: "",
    });

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
                fetchCities(query);
            }, 500)
        );
    };

    const fetchCities = async (query) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/cities/search/${query}`);
            setSuggestedCities(response.data);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setSuggestedCities([]);
            } else {
                console.error("Error fetching cities:", error);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleCitySelect = async (city) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            city: city.description,
        }));
        setCityQuery(city.description);
        setSuggestedCities([]);

        await fetchPostOffices(city.city_ref);
    };

    const fetchPostOffices = async (cityId) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post-office/search/${cityId}`);
            setPostOffices(response.data);
        } catch (error) {
            console.error("Error fetching post offices:", error);
            setPostOffices([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePostOfficeChange = (e) => {
        const selectedPostOfficeId = e.target.value;
        const selectedPostOffice = postOffices.find(office => office.id === selectedPostOfficeId);

        setOrder((prevOrder) => ({
            ...prevOrder,
            post_office_id: selectedPostOfficeId,
            post_office_description: selectedPostOffice ? selectedPostOffice.description : "",
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/order`, order);
            console.log("Order submitted:", response.data);
        } catch (error) {
            console.error("Error submitting order:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value,
        }));
        console.log(order);
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
                                    onChange={handleInputChange}
                                />
                                Передплата 200 грн (решту оплачуєте при отриманні)
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="payment_type"
                                    value="fop"
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
                        <p>
                            <strong>Розміри:</strong> 120смх140см
                        </p>
                        <p>
                            <strong>Тип скла:</strong> М'яке скло
                        </p>
                        <p>
                            <strong>Товщина:</strong> 1.5мм
                        </p>
                        <p>
                            <strong>Загальна сума:</strong> 199.2 грн
                        </p>

                        <h2>Додаткова інформація</h2>
                        <label>
                            Коментар до замовлення (необов’язково)
                            <textarea name="comment" placeholder="Введіть коментар"></textarea>
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

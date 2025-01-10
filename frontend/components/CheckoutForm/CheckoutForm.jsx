import React from "react";
import styles from "./CheckoutForm.module.scss";

const CheckoutForm = () => {
    return (
        <div className={styles.checkoutFormWrapper}>
            <div className={styles.container}>
                <form className={styles.checkoutForm}>
                    <h1>Оформлення замовлення</h1>
                    <div className={styles.personalInfo}>
                        <h2>Особиста інформація</h2>
                        <label>
                            Ваше ім’я
                            <input type="text" placeholder="Введіть ім’я" required/>
                        </label>
                        <label>
                            Ваше прізвище
                            <input type="text" placeholder="Введіть прізвище" required/>
                        </label>
                        <label>
                            Ваша пошта
                            <input type="email" placeholder="Введіть пошту" required/>
                        </label>
                        <label>
                            Ваш номер телефону
                            <input type="tel" placeholder="Введіть номер телефону" required/>
                        </label>

                        <h2>Спосіб оплати</h2>
                        <div>
                            <label>
                                <input type="radio" name="payment" value="full" required/>
                                Повна оплата через WayForPay (Visa, Mastercard)
                            </label>
                            <label>
                                <input type="radio" name="payment" value="prepayment"/>
                                Передплата 200 грн (решту оплачуєте при отриманні)
                            </label>
                            <label>
                                <input type="radio" name="payment" value="bank"/>
                                Оплата на рахунок ФОП
                            </label>
                        </div>
                    </div>

                    <div className={styles.deliveryInfo}>
                        <h2>Дані доставки</h2>
                        <label>
                            Місто
                            <input type="text" placeholder="Введіть місто" required/>
                        </label>
                        <label>
                            Відділення
                            <input type="text" placeholder="Оберіть відділення" required/>
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
                            Коментар до замовлення
                            <textarea placeholder="Введіть коментар"></textarea>
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

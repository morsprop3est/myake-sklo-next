const axios = require("axios");
require('dotenv').config();

const getProductProperties = (product) => {
    const properties = [
        { name: "Glass Type", value: product.glass_type || "" },
        { name: "Glass Thickness", value: product.glass_thickness || "" },
        { name: "Shape", value: product.shape || "" },
    ];

    if (product.dimensions) {
        if (product.dimensions.width) {
            properties.push({ name: "Width", value: product.dimensions.width.toString() });
        }
        if (product.dimensions.height) {
            properties.push({ name: "Height", value: product.dimensions.height.toString() });
        }
        if (product.dimensions.radius) {
            properties.push({ name: "Radius", value: product.dimensions.radius.toString() });
        }
    }

    return properties;
};

const getPaymentData = (orderData) => {
    let paymentMethodId = "";
    let status = "not_paid";
    if (orderData.payment_type === "wayforpay") {
        paymentMethodId = "29"; // ID для "wayforpay"
    } else if (orderData.payment_type === "fop") {
        paymentMethodId = "7"; // ID для "fop"
    } else if (orderData.payment_type === "cash_on_delivery") {
        paymentMethodId = "17"; // ID для "cash_on_delivery"
    }

    if (orderData.payment_status === "paid") {
        status = "paid";
    }

    return {
        payment_method_id: paymentMethodId,
        payment_method: orderData.payment_type || "",
        amount: orderData.total_price || 0,
        description: orderData.comments || "",
        status: status,
    };
};

const sendOrderToKeyCRM = async (orderData) => {
    try {
        const apiUrl = process.env.KEYCRM_API_URL;
        const apiToken = process.env.KEYCRM_API_KEY;

        const formattedData = {
            source_id: 33,
            source_uuid: 1488,
            buyer_comment: orderData.comments || "",
            manager_id: 23,
            manager_comment: "тест перевірка",
            promocode: orderData.promocode || "",
            discount_percent: orderData.discount_percent || 0,
            discount_amount: orderData.discount_amount || 0,
            shipping_price: orderData.shipping_price || 0,
            wrap_price: orderData.wrap_price || 0,
            gift_message: orderData.gift_message || "",
            is_gift: orderData.is_gift || false,
            gift_wrap: orderData.gift_wrap || false,
            taxes: orderData.taxes || 0,
            buyer: {
                full_name: `${orderData.first_name} ${orderData.last_name}`,
                email: orderData.email,
                phone: orderData.phone,
            },
            shipping: {
                delivery_service_id: 1,
                tracking_code: orderData.tracking_code || "",
                shipping_service: orderData.shipping_service || "Нова Пошта",
                shipping_address_city: orderData.city,
                shipping_address_country: "Україна",
                shipping_address_region: "",
                shipping_address_zip: orderData.post_office_id,
                shipping_secondary_line: "",
                shipping_receive_point: orderData.post_office_address || "",
                recipient_full_name: `${orderData.first_name} ${orderData.last_name}`,
                recipient_phone: orderData.phone,
                warehouse_ref: orderData.post_office_ref,
                shipping_date: "",
            },
            marketing: {
                utm_source: orderData.utm_source || "facebook",
                utm_medium: orderData.utm_medium || "banner",
                utm_campaign: orderData.utm_campaign || "sale",
                utm_term: orderData.utm_term || "landing page",
                utm_content: orderData.utm_content || "-30%",
            },
            products: orderData.products.map((product) => ({
                sku: product.sku || "",
                price: product.price || 0,
                purchased_price: product.purchased_price || 0,
                discount_percent: product.discount_percent || 0,
                discount_amount: product.discount_amount || 0,
                quantity: product.quantity || 1,
                unit_type: product.unit_type || "шт",
                name: product.product_name || "",
                comment: product.comment || "",
                picture: product.picture || "",
                properties: getProductProperties(product),
            })),
            payments: [getPaymentData(orderData)],
        };

        const response = await axios.post(apiUrl, formattedData, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                Authorization: `Bearer ${apiToken}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error sending order to KeyCRM:", error.response);
        throw new Error("Failed to send order to KeyCRM");
    }
};

module.exports = { sendOrderToKeyCRM };

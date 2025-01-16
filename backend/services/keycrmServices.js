const axios = require("axios");
require('dotenv').config();

const getProductProperties = (product) => {
    const { dimensions } = product;
    const properties = [
        { name: "Shape", value: dimensions.shape || "" },
        { name: "Glass Type", value: dimensions.glassType || "" },
        { name: "Glass Thickness", value: dimensions.glassThickness || "" },
        { name: "Width", value: dimensions.width?.toString() || "" },
        { name: "Height", value: dimensions.height?.toString() || "" },
        { name: "Radius", value: dimensions.radius?.toString() || "" },
    ];
    return properties;
};

const getPaymentData = (orderData) => {
    let paymentMethodId = "";
    let status = "not_paid";

    if (orderData.payment_type === "wayforpay") {
        paymentMethodId = "29"; // Wayforpay ID
    } else if (orderData.payment_type === "fop") {
        paymentMethodId = "7"; // FOP ID
    } else if (orderData.payment_type === "cash_on_delivery") {
        paymentMethodId = "17"; // Cash on delivery ID
    }

    if (orderData.payment_status === "paid") {
        status = "paid";
    }

    return {
        payment_method_id: paymentMethodId,
        payment_method: orderData.payment_type || "",
        amount: orderData.total_price || 0,
        description: orderData.comments || "",
        status,
    };
};

const sendOrderToKeyCRM = async (orderData) => {
    try {
        const apiUrl = process.env.KEYCRM_API_URL;
        const apiToken = process.env.KEYCRM_API_KEY;

        const formattedData = {
            source_id: 33,
            source_uuid: 777,
            buyer_comment: orderData.comments || "",
            manager_id: 23,
            manager_comment: "Order verification",
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
                shipping_service: orderData.delivery_type || "Нова Пошта",
                shipping_address_city: orderData.city,
                shipping_address_country: "Україна",
                shipping_address_zip: orderData.post_office_id,
                shipping_receive_point: orderData.post_office_address || "",
                recipient_full_name: `${orderData.first_name} ${orderData.last_name}`,
                recipient_phone: orderData.phone,
                warehouse_ref: orderData.post_office_ref,
            },
            marketing: {
                utm_source: orderData.utm_source || "",
                utm_medium: orderData.utm_medium || "",
                utm_campaign: orderData.utm_campaign || "",
                utm_term: orderData.utm_term || "",
                utm_content: orderData.utm_content || "",
            },
            products: orderData.products.map((product) => ({
                sku: product.product_id?.toString() || "", 
                price: parseFloat(product.price) || 0,
                quantity: product.quantity || 1,
                unit_type: "шт",
                name: "М`яке скло",
                properties: getProductProperties(product),
            })),
            payments: [getPaymentData(orderData)],
        };

        const response = await axios.post(apiUrl, formattedData, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${apiToken}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error sending order to KeyCRM:", error?.response?.data || error.message);
        throw new Error("Failed to send order to KeyCRM");
    }
};

module.exports = { sendOrderToKeyCRM };

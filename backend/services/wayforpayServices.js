const crypto = require('crypto');

const generateSignature = (params, secretKey) => {
    const values = [
        params.merchantAccount,
        params.merchantDomainName,
        params.orderReference,
        params.orderDate,
        params.amount,
        params.currency,
        ...params.productName,
        ...params.productCount,
        ...params.productPrice,
    ].join(';');
    return crypto.createHmac('md5', secretKey).update(values).digest('hex');
};

const generateWayForPayForm = (orderData) => {
    const merchantAccount = process.env.WAYFORPAY_MERCHANT;
    const merchantDomainName = process.env.WAYFORPAY_MERCHANT_WEBSITE;
    const secretKey = process.env.WAYFORPAY_SECRET_KEY;

    const productName = orderData.products.map(product => {
        const { width, height, glassThickness, glassType } = product.dimensions;
        return `М'яке скло ${width}СМХ${height} ${glassThickness} ${glassType}`;
    });

    const params = {
        merchantAccount,
        merchantAuthType: 'SimpleSignature',
        merchantDomainName,
        orderReference: orderData.id,
        orderDate: Math.floor(Date.now() / 1000),
        amount: orderData.total_price,
        currency: 'UAH',
        apiVersion: '1',
        language: 'UA',
        orderTimeout: 49000,
        productName,
        productPrice: orderData.products.map(product => product.price),
        productCount: orderData.products.map(product => product.quantity),
        deliveryList: "nova",
        clientFirstName: orderData.first_name,
        clientLastName: orderData.last_name,
        clientAddress: orderData.address,
        clientCity: orderData.city,
        clientEmail: orderData.email,
        clientPhone: orderData.phone,
        clientCountry: 'UKR',
        defaultPaymentSystem: 'card'
    };

    const signature = generateSignature(params, secretKey);

    return `
        <form id="wayforpay-form" method="post" action="https://secure.wayforpay.com/pay" accept-charset="utf-8">
            ${Object.keys(params).map(key => {
                if (Array.isArray(params[key])) {
                    return params[key].map(value => `<input type="hidden" name="${key}[]" value="${value}">`).join('');
                }
                return `<input type="hidden" name="${key}" value="${params[key]}">`;
            }).join('')}
            <input type="hidden" name="merchantSignature" value="${signature}">
            <button type="submit">Оплатить</button>
        </form>
        <script type="text/javascript">
            document.getElementById('wayforpay-form').submit();
        </script>
    `;
};

module.exports = { generateWayForPayForm };
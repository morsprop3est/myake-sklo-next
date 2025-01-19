const crypto = require('crypto');

const generateSignature = (params, secretKey) => {
    const values = Object.values(params).join(';');
    return crypto.createHash('md5').update(values + secretKey).digest('hex');
};

const generateWayForPayForm = (orderData) => {
    const merchantAccount = process.env.WAYFORPAY_MERCHANT;
    const merchantDomainName = process.env.WAYFORPAY_MERCHANT;
    const secretKey = process.env.WAYFORPAY_SECRET_KEY;

    const params = {
        merchantAccount,
        merchantDomainName,
        orderReference: orderData.orderReference,
        orderDate: Math.floor(Date.now() / 1000),
        amount: orderData.total_price,
        currency: 'UAH',
        productName: orderData.products.map(product => product.name),
        productPrice: orderData.products.map(product => product.price),
        productCount: orderData.products.map(product => product.quantity),
        clientFirstName: orderData.first_name,
        clientLastName: orderData.last_name,
        clientAddress: orderData.address,
        clientCity: orderData.city,
        clientEmail: orderData.email,
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
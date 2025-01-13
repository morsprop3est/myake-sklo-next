export const calculatePrice = (product) => {
    if (!product || !product.dimensions) {
        console.error('product або product.dimensions відсутні');
        return 0;
    }

    if (product.price) {
        return product.price.toFixed(0);
    }

    const { width, height, glassType, glassThickness, shape } = product.dimensions;

    if (width === undefined || height === undefined || glassType === undefined || glassThickness === undefined || shape === undefined) {
        console.error('Одне або кілька значень відсутні у dimensions');
        console.log(product);
        return 0;
    }

    let forma = 0;
    let tol = 830;

    switch (shape) {
        case 'rectangle':
            forma = 0;
            break;
        case 'round':
            forma = 40;
            break;
        case 'oval':
            forma = 80;
            break;
        case 'rounded':
            forma = 40;
            break;
        default:
            console.error('Невідомий тип форми:', shape);
            return 0;
    }

    switch (glassType) {
        case 'glossy':
            tol = glassThickness === 'thin' ? 830 : 940;
            break;
        case 'ribbed':
            tol = 910;
            break;
        case 'black':
            tol = 914;
            break;
        default:
            console.error('Невідомий тип скла:', glassType);
            return 0;
    }

    const sizeMultiplier = (width * height) / 10000;
    const cenaCalc = (tol * sizeMultiplier) + forma;

    return cenaCalc.toFixed(0);
};
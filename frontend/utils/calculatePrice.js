export const calculatePrice = (width, height, glassType, glassThickness, shape) => {
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
    }

    const sizeMultiplier = (width * height) / 10000;
    const cenaCalc = (tol * sizeMultiplier) + forma;
    const oldPriceCalc = 1.25 * cenaCalc;

    return { newPrice: cenaCalc.toFixed(0), oldPrice: oldPriceCalc.toFixed(0) };
};

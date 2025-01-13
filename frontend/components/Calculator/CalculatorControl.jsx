import React from 'react';
import styles from './Calculator.module.scss';
import TableShape from './CalculatorControlСomponents/TableShape';
import GlassType from './CalculatorControlСomponents/GlassType';
import GlassThickness from './CalculatorControlСomponents/GlassThickness';
import TableDimensions from './CalculatorControlСomponents/TableDimensions';
import PriceDisplay from './CalculatorControlСomponents/PriceDisplay';
import Link from 'next/link';

const CalculatorControl = ({
    product,
    setProduct,
    onAddToCart,
}) => {
    return (
        <div className={styles.calculatorControl}>
            <TableShape product={product} setProduct={setProduct} />
            <GlassType product={product} setProduct={setProduct} />
            <GlassThickness product={product} setProduct={setProduct} />
            <TableDimensions product={product} setProduct={setProduct} />
            <PriceDisplay product={product} />
            <button className={styles.mainButton} onClick={onAddToCart}>
                Додати до кошика
            </button>
            <p>
                Підтверджуючи замовлення, Ви приймаєте умови{' '}
                <Link href="">публічного договору</Link>.
            </p>
        </div>
    );
};

export default CalculatorControl;

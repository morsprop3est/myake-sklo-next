import React from 'react';
import styles from './Calculator.module.scss';
import TableShape from './CalculatorControlСomponents/TableShape';
import GlassType from './CalculatorControlСomponents/GlassType';
import GlassThickness from './CalculatorControlСomponents/GlassThickness';
import TableDimensions from './CalculatorControlСomponents/TableDimensions';
import PriceDisplay from './CalculatorControlСomponents/PriceDisplay';
import Link from "next/link";

const CalculatorControl = ({
                               tableDimensions,
                               setTableDimensions,
                               shape,
                               setShape,
                               glassType,
                               setGlassType,
                               glassThickness,
                               setThickness,
                           }) => {
    return (
        <div className={styles.calculatorControl}>
            <TableShape shape={shape} setShape={setShape} />
            <GlassType glassType={glassType} setGlassType={setGlassType} glassThickness={glassThickness}/>
            <GlassThickness glassThickness={glassThickness} setThickness={setThickness} />
            <TableDimensions
                tableDimensions={tableDimensions}
                setTableDimensions={setTableDimensions}
                shape={shape}
            />
            <PriceDisplay />
            <button
                className={styles.mainButton}
                onClick={() => alert('Додано в кошик')}
            >
                Додати до кошика
            </button>
            <p>
                Підтверджуючи замовлення, Ви приймаєте умови <Link href="">публічного договору</Link>.
            </p>
        </div>
    );
};

export default CalculatorControl;

import React, { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }:Props ) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(    
        () => !!maxCount && counter === maxCount, // Si existe el maxCount y el counter = maxCount la función devuelve un true. Si no, devuelve un false.
      [counter, maxCount],
    )
    


    return (
        <div 
            className={ `${ styles.buttonsContainer } ${ className }` }
            style={ style }
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >-</button>
            <div className={styles.countLabel}> {counter} </div>
            <button
                className={ `${ styles.buttonAdd } ${ isMaxReached() && styles.disabled }` } // Si isMaxReached es true, se aplica la clase disabled
                onClick={() => increaseBy(1)}
            >+</button>
        </div>
    )
}
import React from 'react';

import styles from './CharCounter.module.css';

const charCounter = (props) => {
    let value = props.value;
    let counterStyles = [styles.Counter];
    //  Check if there are any conditions on the field
    if ((props.ciel > 0 && (props.value >= (props.ciel - 4))) || (props.floor > -1 && (props.value < props.floor)))
        counterStyles.push(styles.Alert);
    //  If there is a cieling limit, display the remaining characters allowed
    if (props.ciel > 0)
        value = props.ciel - props.value;
    return (
        <span className={counterStyles.join(' ')}>
            <p>{value}</p>
        </span>
    )
}

export default charCounter;
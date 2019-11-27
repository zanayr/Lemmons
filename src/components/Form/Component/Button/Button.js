import React from 'react';

import styles from './Button.module.css';

const formButton = (props) => {
    let buttonStyles = [styles.Button];
    if (props.active && !props.disabled)
        buttonStyles.push(styles.Active);
    if (!props.disabled)
        buttonStyles.push(styles.Enabled);
    return (
        <button
            className={buttonStyles.join(' ')}
            disabled={props.disabled}
            onClick={props.click}
            name={props.name}
            type={'submit'}>{props.value}</button>
    );
};

export default formButton;
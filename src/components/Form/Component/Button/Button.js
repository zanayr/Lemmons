import React from 'react';

import styles from './FormButton.module.css';

const FormButton = (props) => {
    let stylesArr = [styles.FormButton_Button];
    if (props.active)
        stylesArr.push(styles.FormButton_Active);
    return (
            <button
                className={stylesArr.join(' ')}
                disabled={props.disabled}
                onClick={props.click}
                name={props.name}
                type={'submit'}>{props.value}</button>
    );
};

export default FormButton;
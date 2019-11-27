import React from 'react';

import styles from './FormInput.module.css';

const FormInput = (props) => {
    let inputStyles = [styles.FormInput_Input];
    let maxStyles = [styles.FormInput_Max];

    if (props.value.length === props.max)
        inputStyles.push(styles.FormInput_Input_Max);
    if (props.max > -1 && props.value.length >= (props.max - 5))
        maxStyles = [styles.FormInput_Max_Warn];
    
    return (
        <div className={styles.FormInput_Group}>
            <label className={styles.FormInput_Label}>{props.label}</label>
            <input
                className={inputStyles.join(' ')}
                onChange={props.change}
                maxLength={props.max > -1 ? props.max : null}
                name={props.label.toLowerCase()}
                type={props.label === 'Password' ? 'password' : 'text'}
                value={props.value}/>
            {props.max ?
            <span className={maxStyles.join(' ')}>
                <p>{props.max - props.value.length}</p>
            </span>
            : null}
        </div>
    );
};

export default FormInput;
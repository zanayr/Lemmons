import React from 'react';

import styles from './Field.module.css';

const formField = (props) => {
    let maxStyles = [styles.Max];
    if (props.max > -1 && props.value.length >= (props.max - 5))
        maxStyles.push(styles.Max_Warn);
    
    return (
        <div className={styles.Group}>
            <label className={styles.Label}>{props.label}</label>
            <input
                className={styles.Input}
                onChange={props.change}
                maxLength={props.max > -1 ? props.max : null}
                name={props.label.toLowerCase()}
                placeholder={props.placeholder}
                type={props.label === 'Password' ? 'password' : 'text'}
                value={props.value}/>
            {props.max ?
            <span className={maxStyles.join(' ')}>
                <p>{props.max - props.value.length}</p>
            </span>
            : null}
            <span className={styles.Bottom_Border}></span>
        </div>
    );
};

export default formField;
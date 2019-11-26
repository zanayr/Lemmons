import React from 'react';

import styles from './Input.module.css';

const input = (props) => {
    let max = null;
    if (props.max)
        max = (
            <span className={[styles.Input_Max, props.value.length >= (props.max - 5) ? styles.Input_Max_Warn : ''].join(' ')}>
                <p>{props.max}</p>
            </span>
        );
    return (
        <div className={styles.Input_Group}>
            <label className={styles.Input_Label}>{props.lable}</label>
            <input
                className={[styles.Input_Input, props.value.length === props.max ? styles.Input_Input_Max : ''].join(' ')}
                onChange={props.change}
                maxLength={props.max > -1 ? props.max : null}
                type='text'
                value={props.value
            }/>
            {max}
        </div>
    );
};

export default input;
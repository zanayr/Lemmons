import React, {useRef, useState} from 'react';

import CharCounter from '../CharCounter/CharCounter';
import ShowPasswordButton from '../ShowPasswordButton/ShowPasswordButton';

import styles from './Field.module.css';

const FormField = (props) => {
    let [type, setType] = useState(props.type);
    const ref = useRef();
    let maxStyles = [styles.Max];

    const showPassword = (e) => {
        e.preventDefault();
        setType(type === 'password' ? 'text' : 'password');
        ref.current.focus();
    };

    if ((props.max > -1 && props.value.length >= (props.max - 5)) || (props.min > -1 && props.value.length < props.min))
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
                ref={ref}
                type={type ? type : 'text'}
                value={props.value}/>
            { props.type === 'password' ? <ShowPasswordButton click={showPassword} /> : null }
            { props.max ? <CharCounter ciel={props.max} floor={props.min} value={props.value.length} /> : null }
            <span className={styles.Bottom_Border}></span>
        </div>
    );
};

export default FormField;
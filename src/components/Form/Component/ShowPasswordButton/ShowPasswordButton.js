import React from 'react';

import styles from './ShowPasswordButton.module.css';

const showPasswordButton = (props) => {
    return (
        <span
            className={styles.Button}
            onClick={props.click}>
            <p>👁</p>
        </span>
    );
}

export default showPasswordButton;
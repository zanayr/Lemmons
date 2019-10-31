import React from 'react';

import styles from './ListItem.module.css';

const listItem = (props) => {
    return (
        <div className={styles.ListItem}>
            <div className="wrapper">
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
            </div>
        </div>
    );
}

export default listItem;
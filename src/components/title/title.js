import React from 'react';

import styles from './Title.module.css';

const title = (props) => {
    return (
        <div className={styles.Title}>
            <div className='wrapper'>
                <h1>{props.content}</h1>
            </div>
        </div>
    );
}

export default title;
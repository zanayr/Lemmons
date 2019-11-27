import React from 'react';

import styles from './Column.module.css';

const COLUMN_JUSTIFY_STYLES = {
    'around': styles.Column_Justify_Around,
    'between': styles.Column_Justify_Between,
    'end': styles.Column_Justify_End,
    'even': styles.Column_Justify_Even,
    'start': styles.Column_Justify_Start
}
const COLUMN_ALIGN_STYLES = {
    'center': styles.Column_Justify_Between,
    'end': styles.Column_Justify_End,
    'start': styles.Column_Justify_Start
}

const layoutColumn = (props) => {
    let columnStyles = [styles.Column];
    if (props.justify && COLUMN_JUSTIFY_STYLES[props.justify])
        columnStyles.push(COLUMN_JUSTIFY_STYLES[props.justify]);
    if (props.align && COLUMN_ALIGN_STYLES[props.align])
        columnStyles.push(COLUMN_ALIGN_STYLES[props.align]);
    return (
        <div className={columnStyles.join(' ')}>
            <div className={styles.Column_Wrapper}>
                {props.children}
            </div>
        </div>
    );
};

export default layoutColumn;
import React from 'react';

import styles from './Row.module.css';

const ROW_JUSTIFY_STYLES = {
    'around': styles.Justify_Around,
    'between': styles.Justify_Between,
    'end': styles.Justify_End,
    'evenly': styles.Justify_Evenly,
    'start': styles.Justify_Start
}
const ROW_ALIGN_STYLES = {
    'center': styles.Justify_Between,
    'end': styles.Justify_End,
    'start': styles.Justify_Start
}

const layoutRow = (props) => {
    let rowStyles = [styles.Row];
    if (props.justify && ROW_JUSTIFY_STYLES[props.justify])
        rowStyles.push(ROW_JUSTIFY_STYLES[props.justify]);
    if (props.align && ROW_ALIGN_STYLES[props.align])
        rowStyles.push(ROW_ALIGN_STYLES[props.align]);
    return (
        <div className={rowStyles.join(' ')}>
            <div className={styles.Wrapper}>
                {props.children}
            </div>
        </div>
    );
};

export default layoutRow;
import React, {useState} from 'react';

import Column from '../../../hoc/Layout/Column/Column';
import Button from '../Components/Button/Button';
import Field from '../Components/Field/Field';
import Row from '../../../hoc/Layout/Row/Row';


import styles from './FormButton.module.css';

const FormButton = (props) => {
    const [enabled, setEnabled] = useState(false);
    return (
        <form className={styles.Authentication_Form}>
            <div className={styles.Authentication_Form_Wrapper}>
                <Column>
                    <Field
                        change={(e) => this.handle_onChange(e, 'username')}
                        label={'Username'}
                        value={this.state.username}/>
                    <Field
                        change={(e) => this.handle_onChange(e, 'password')}
                        label={'Password'}
                        value={this.state.password}/>
                </Column>
                <Row>
                    <Button
                        active={this.state.active === 0}
                        disabled={!valid}
                        click={this.handle_onSignIn}
                        value={'Sign In'}/>
                    <Button
                        active={this.state.active === 1}
                        disabled={false}
                        click={this.handle_onCreateAccount}
                        value={'Create Account'}/>
                </Row>
            </div>
        </form>
    );
};

export default FormButton;
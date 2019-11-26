import React, {useState} from 'react';

import styles from './FormButton.module.css';

const FormButton = (props) => {
    const [valid, setValid] = useState(false);
    return (
        <form className={styles.Authentication_Form}>
            <div className={styles.Authentication_Form_Wrapper}>
                <FormInput
                    change={(e) => this.handle_onChange(e, 'username')}
                    label={'Username'}
                    value={this.state.username}/>
                <FormInput
                    change={(e) => this.handle_onChange(e, 'password')}
                    label={'Password'}
                    value={this.state.password}/>
                <footer className={styles.Authentication_FormFooter}>
                    <div className={styles.Authentication_FormFooter_Wrapper}>
                    <FormButton
                        active={this.state.active === 0}
                        disabled={!valid}
                        click={this.handle_onSignIn}
                        value={'Sign In'}/>
                    <FormButton
                        active={this.state.active === 1}
                        disabled={false}
                        click={this.handle_onCreateAccount}
                        value={'Create Account'}/>
                    </div>
                </footer>
            </div>
        </form>
    );
};

export default FormButton;
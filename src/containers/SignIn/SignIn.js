import React, {Component} from 'react';

import SignInForm from '../../components/Form/SignInForm/SignInForm';

import styles from './SignIn.module.css';

class SignIn extends Component {
    render() {
        return (
            <main className={styles.Main}>
                <div className={styles.Main_Wrapper}>
                    <SignInForm />
                </div>
            </main>
        );
    }
}

export default SignIn;
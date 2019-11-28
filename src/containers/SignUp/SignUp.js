import React, {Component} from 'react';

import SignUpForm from '../../components/Form/SignUpForm/SignUpForm';

import styles from './SignUp.module.css';

class SignUp extends Component {
    render() {
        return (
            <main className={styles.Main}>
                <div className={styles.Main_Wrapper}>
                    <SignUpForm />
                </div>
            </main>
        );
    }
}

export default SignUp;
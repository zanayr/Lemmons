import React, {Component} from 'react';

import AuthenticationForm from '../../components/Form/Authentication/Authentication';

import styles from './Authentication.module.css';

class Authentication extends Component {
    // state = {
    //     active: 0,
    //     enabled: false,
    //     password: '',
    //     username: ''
    // };
    
    // handle_onChange = (e, field) => {
    //     this.setState({
    //         ...this.state,
    //         [field]: e.target.value
    //     }, () => {
    //         this.setState({
    //             ...this.state,
    //             enabled: this.state.password.length > 0 && this.state.username.length > 0
    //         });
    //     });
    // };
    // handle_onCreateAccount = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         ...this.state,
    //         active: 1
    //     });
    //     //  Change to CreateUser page
    // };
    // handle_onSignIn = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         ...this.state,
    //         active: 0
    //     });
    //     // Authenticate
    // };
    

    render() {
        return (
            <main className={styles.Authentication_Main}>
                <div className={styles.Authentication_Main_Wrapper}>
                    <AuthenticationForm/>
                </div>
            </main>
            
        );
    }
}

export default Authentication;
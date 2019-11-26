import React, {Component} from 'react';

import FormButton from '../../components/Input/Buttons/FormButton/FormButton';
import FormInput from '../../components/Input/Fields/FormInput/FormInput';

import styles from './Authentication.module.css';

class Authentication extends Component {
    state = {
        password: '',
        username: ''
    };

    
    handle_onChange = (e, field) => {
        this.setState({
            ...this.state,
            [field]: e.target.value
        });
    };
    handle_onCreateAccount = (e) => {
        e.preventDefault();

    };
    handle_onSignIn = (e) => {
        e.preventDefault();

    };
    

    render() {
        return (
            <main className={styles.Authentication_Main}>
                <div className={styles.Authentication_Main_Wrapper}>
                    <form>
                        <FormInput
                            change={(e) => this.handle_onChange(e, 'username')}
                            label={'Username'}
                            value={this.state.username}/>
                        <FormInput
                            change={(e) => this.handle_onChange(e, 'password')}
                            label={'Password'}
                            value={this.state.password}/>
                        <FormButton
                            active
                            click={this.handle_onSignIn}
                            value={'Sign In'}/>
                        <FormButton
                            click={this.handle_onCreateAccount}
                            value={'Create Account'}/>
                    </form>
                </div>
            </main>
            
        );
    }
}

export default Authentication;
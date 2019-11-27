import React, {Component} from 'react';

import AuthenticationForm from '../../components/Form/Authentication/Authentication';
import CreateUserForm from '../../components/Form/Authentication/Authentication';

import styles from './Authentication.module.css';

class Authentication extends Component {
    state = {
        active: 0
    };

    //  Event Handlers
    handle_onCreateUser = (e) => {
        e.preventDefault();
        this.setState({active: 1});
    }
    handle_onSignIn = (e) => {
        e.preventDefault();
        this.setState({active: 0});
    }
    render() {
        let form = (<AuthenticationForm
            active={this.state.active}
            onCreateUser={this.handle_onCreateUser}
            onSignIn={this.handle_onSignIn}/>);
        if (this.state.active)
            form = (<CreateUserForm
                active={this.state.active}
                onCreateUser={this.handle_onCreateUser}
                onSignIn={this.handle_onSignIn}/>);
        return (
            <main className={styles.Authentication_Main}>
                <div className={styles.Authentication_Main_Wrapper}>
                    {form}
                    
                </div>
            </main>
        );
    }
}

export default Authentication;
import React, {Component} from 'react';

import Column from '../../../hoc/Layout/Column/Column';
import Button from '../Component/Button/Button';
import Field from '../Component/Field/Field';
import Row from '../../../hoc/Layout/Row/Row';


import styles from './Authentication.module.css';

class FormAuthentication extends Component {
    state = {
        active: 0,
        password: '',
        username: ''
    }

    //  Event Handlers
    handle_onChange = (e, name) => {
        this.setState({
            ...this.state,
            [name]: e.target.value
        });
    }
    handle_onCreateAccount = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            active: 1
        });
    }
    handle_onSignIn = (e) => {
        e.preventDefault();
    }

    render() {
        let active = this.state.active;
        return (
            <form className={styles.Form}>
                <div className={styles.Form_Wrapper}>
                    <Column>
                        <Field
                            change={(e) => this.handle_onChange(e, 'username')}
                            label={'Username'}
                            placeholder={'username'}
                            value={this.state.username}/>
                        <Field
                            change={(e) => this.handle_onChange(e, 'password')}
                            label={'Password'}
                            placeholder={'password'}
                            max={32}
                            value={this.state.password}/>
                    </Column>
                    <Row justify={'evenly'}>
                        <Button
                            active={this.state.active === 0}
                            disabled={!(this.state.password.length > 7 && this.state.username.length)}
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
    }
};

export default FormAuthentication;
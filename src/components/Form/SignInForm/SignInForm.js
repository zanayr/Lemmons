import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import Column from '../../../hoc/Layout/Column/Column';
import Button from '../Component/Button/Button';
import Field from '../Component/Field/Field';
import Row from '../../../hoc/Layout/Row/Row';


import styles from './SignInForm.module.css';

class SignInForm extends Component {
    state = {
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
    handle_onSignIn = (e) => {
        e.preventDefault();
        console.log('Signing in with', 'user: ' + this.state.username, 'password: ' + this.state.password);
    }
    handle_onSignUp = (e) => {
        e.preventDefault();
        this.props.history.push({pathname: '/signup'});
    }

    render() {
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
                            value={this.state.password}/>
                    </Column>
                    <Row justify={'evenly'}>
                        <Button
                            active={true}
                            disabled={!(this.state.password.length > 7 && this.state.username.length)}
                            click={this.handle_onSignIn}
                            value={'Sign In'}/>
                        <Button
                            active={false}
                            disabled={false}
                            click={this.handle_onSignUp}
                            value={'Create Account'}/>
                    </Row>
                </div>
            </form>
        );
    }
};

export default withRouter(SignInForm);
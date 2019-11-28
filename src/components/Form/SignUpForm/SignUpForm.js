import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import Column from '../../../hoc/Layout/Column/Column';
import Button from '../Component/Button/Button';
import Field from '../Component/Field/Field';
import Row from '../../../hoc/Layout/Row/Row';


import styles from './SignUpForm.module.css';

class SignUpForm extends Component {
    state = {
        password: '',
        confirm: '',
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
        this.props.history.push({pathname: '/auth'});
    }
    handle_onSignUp = (e) => {
        e.preventDefault();
        console.log('Creating account', 'user: ' + this.state.username, 'password: ' + this.state.password);
    }

    render() {
        return (
            <form className={styles.Form}>
                <div className={styles.Form_Wrapper}>
                    <Column>
                        <Field
                            change={(e) => this.handle_onChange(e, 'username')}
                            label={'Username'}
                            max={32}
                            min={4}
                            placeholder={'Username'}
                            type='text'
                            value={this.state.username}/>
                        <Field
                            change={(e) => this.handle_onChange(e, 'password')}
                            label={'Password'}
                            max={32}
                            min={8}
                            placeholder={'Password'}
                            type={'password'}
                            value={this.state.password}/>
                        <Field
                            change={(e) => this.handle_onChange(e, 'confirm')}
                            label={'Confirm Password'}
                            max={32}
                            min={8}
                            placeholder={'Confirm Password'}
                            type={'password'}
                            value={this.state.confirm}/>
                    </Column>
                    <Row justify={'evenly'}>
                        <Button
                            active={false}
                            disabled={false}
                            click={this.handle_onSignIn}
                            value={'Sign In'}/>
                        <Button
                            active={true}
                            disabled={false}
                            click={this.handle_onSignUp}
                            value={'Create Account'}/>
                    </Row>
                </div>
            </form>
        );
    }
};

export default withRouter(SignUpForm);
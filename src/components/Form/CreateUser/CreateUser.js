import React, {Component} from 'react';

import Column from '../../../hoc/Layout/Column/Column';
import Button from '../Component/Button/Button';
import Field from '../Component/Field/Field';
import Row from '../../../hoc/Layout/Row/Row';


import styles from './CreateUser.module.css';

class FormCreateUser extends Component {
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
                        <Field
                            change={(e) => this.handle_onChange(e, 'confirm')}
                            label={'Confirm'}
                            placeholder={'password'}
                            value={this.state.password}/>
                    </Column>
                    <Row justify={'evenly'}>
                        <Button
                            active={!this.props.active}
                            disabled={!(this.state.password.length > 7 && this.state.username.length)}
                            click={this.props.onSignIn}
                            value={'Sign In'}/>
                        <Button
                            active={this.props.active}
                            disabled={false}
                            click={this.props.onCreateUser}
                            value={'Create Account'}/>
                    </Row>
                </div>
            </form>
        );
    }
};

export default FormCreateUser;
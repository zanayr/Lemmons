import React, {Component} from 'react';

import Title from '../../components/Title/Title';
import List from '../../components/List/List';

import styles from './Main.module.css';

class Main extends Component {
    state = {
        0: {
            title: 'Hello World',
            detail: 'Lorem ipsum dolor set.'
        },
        1: {
            title: 'Lorem ipsum',
            detail: 'Lorem ipsum dolor set.'
        }
    }
    render () {
        return (
            <main className={styles.Main}>
                <Title content={'Main'}/>
                <List data={this.state}/>
            </main>
        );
    }
}

export default Main;
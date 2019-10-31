import React, {Component} from 'react';

import Title from '../../components/title/title';
import List from '../../components/List/List';

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
            <main>
                <Title content={'Main'}/>
                <List data={this.state}/>
            </main>
        );
    }
}

export default Main;
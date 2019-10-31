import React, {Component} from 'react';

import ListItem from '../ListItem/ListItem';

class List extends Component {
    render () {
        const data = this.props.data;
        const items = Object.keys(data).map(function (item) {
            return (<ListItem title={data[item].title} detail={data[item].detail} key={item}/>)
        });
        return (
            <div>
                <div className="wrapper">
                    {items}
                </div>
            </div>
        );
    }
}

export default List;
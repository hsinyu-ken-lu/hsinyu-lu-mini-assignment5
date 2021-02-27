import React from 'react';
import "./index.css";

export default class Count extends React.Component {
    render() {
        return(
            <div className="counter_large">Count: {this.props.count}</div>
        );
    }

}
import React from 'react';
import Count from './Count.js';
import Square from './Square.js';

// I use App.js with Count.js and Square.js
// Square.js controls the box behaviors, I also bind a counter function from App.js to Square.js
// Count.js would render the count from App.js
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }

    counter(num){
        this.setState({
            count:this.state.count + num
        });
    }

    render() {
        return (
            <div className="center">
                <div>
                    <Count count={this.state.count}/>
                </div>
                <div className="layout">
                    <Square counter={this.counter.bind(this)}/>
                    <Square counter={this.counter.bind(this)}/>
                    <Square counter={this.counter.bind(this)}/>
                    <Square counter={this.counter.bind(this)}/>
                </div>
            </div>
        );
    }
}
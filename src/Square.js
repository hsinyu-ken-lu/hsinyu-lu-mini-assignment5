import React from 'react';
import './index.css';

export default class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            box:"white_sqaure_box"
        };
    }

    turnOnAndOff(){
        if(this.state.box === "white_sqaure_box"){
            this.setState({
                box:"black_sqaure_box"
            });
            this.props.counter(1);
        }else{
            this.setState({
                box:"white_sqaure_box"
            });
            this.props.counter(-1);
        }
    }

    render() {
        return (
            <div className={this.state.box} onClick={() => this.turnOnAndOff()}>
            </div>
        );
    }
}
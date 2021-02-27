import React from 'react';

export default class App extends React.Component{
    
    greeting(){
        console.log("ken");
    }

    render() {
        return (
            <div>
                {this.greeting()}
            </div>
        );
    }
}
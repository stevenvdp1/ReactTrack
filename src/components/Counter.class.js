import React from 'react';

class Counter extends React.Component {
    state = { count:0 }
    render() {
        const{count}= this.state
        return (
            <div>
                <h1 onClick={() => this.setState({count:count-1})}>-</h1>
                <span>{count}</span>
                <h1 onClick={() => this.setState({count:count+1})}>+</h1>
            </div>
        );
    }
}

export default Counter;
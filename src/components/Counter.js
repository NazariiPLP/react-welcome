import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            step: 1,
        };
    }

    increment() {
        this.setState({
            count: this.state.count + this.state.step
        })
    }

    decrement() {
        if (this.state.count > 0) {
        this.setState({
            count: this.state.count - this.state.step
        });
        } else if(this.state.count < 0) {
            this.state.count = 0;
            alert('Count can\'t be less than 0');
        };
    }

    stepIncrement() {
        this.setState({
            step: this.state.step + 1
        })
    }

    stepDecrement() {
        if (this.state.step > 1) {
        this.setState({
            step: this.state.step - 1
        });
        } else {
        alert('Step can\'t be less than 1');
        };
    }
 
    render() {
        const h1 = React.createElement('h1', {}, 'Counter');
        const h2 = React.createElement('h2', {}, this.state.count);
        const buttonIncrement = React.createElement('button', {onClick: () => {this.increment()}}, '+');
        const buttonDecrement = React.createElement('button', {onClick: () => {this.decrement()}}, '-');
        const h1Step = React.createElement('h1', {}, 'Step');
        const h2Step = React.createElement('h2', {}, this.state.step);
        const buttonIncrementStep = React.createElement('button', {onClick: () => {this.stepIncrement()}}, '+');
        const buttonDecrementStep = React.createElement('button', {onClick: () => {this.stepDecrement()}}, '-');
        return React.createElement(React.Fragment, {}, h1, h2, buttonIncrement, buttonDecrement, h1Step, h2Step, buttonIncrementStep, buttonDecrementStep);
    }
}

export default Counter;

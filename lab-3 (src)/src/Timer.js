import React from "react";
import './timer.css';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
        }
    }
    interval;

    updateState() {
        this.setState({
            seconds: this.state.seconds + 1
        })
    }

    componentDidMount = () => {
        this.interval = setInterval(() => {
            this.updateState()
        }, 1000);
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.seconds);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval)
    }

    render() {
        return (
            <React.Fragment>
                <h1>Seconds: {this.state.seconds}</h1>
            </React.Fragment>
        )
    }
}
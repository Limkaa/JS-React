import React from 'react';
import './App.css';
import Timer from './Timer'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      timer_active: true
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {this.state.timer_active && <Timer/>}
          {this.state.timer_active ? <button onClick={() => this.setState({timer_active: false})}>
            Stop and remove timer
          </button>: <h1>Timer successfully removed</h1>}
        </div>
      </React.Fragment>
    )
  }
}

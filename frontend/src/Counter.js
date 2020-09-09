import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count-1
    })
  }

  render() {
    return (
      <div>
      {this.state.count}
      <button onClick={this.incrementCount}>Increment</button>
      <button onClick={this.decrementCount}>Decrement</button>
      </div>
    )
  }
}

export default Counter

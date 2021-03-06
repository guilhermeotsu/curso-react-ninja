'use strict'

import React, { PureComponent } from 'react'
import Counter from './counter'

class CounterContainer extends PureComponent {
  constructor () {
    super()
    this.state = {
      counter: 0
    }

    this.increment = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }

    this.decrement = () => {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }

  render () {
    return (
      <Counter counter={this.state.counter}
        handleIncrement={this.increment}
        handleDecrement={this.decrement} />
    )
  }
}

export default CounterContainer

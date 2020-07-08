'use strict'

import React from 'react'

class Timer extends React.Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
    this.intervalTimer
  }

  // componente montou na tela
  componentDidMount () {
    this.invervalTimer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  // quando o timer for desmontado, parar o relogio
  componentWillUnmount () {
    clearInterval(this.invervalTimer)
  }

  render () {
    return (
      <div>
        Timer: {this.state.time}
      </div>
    )
  }
}

export default Timer

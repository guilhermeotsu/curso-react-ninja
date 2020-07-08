'use strict'

import React, { Component } from 'react'
import Timer from './timer'

// para renderizar é necessario extender a classe
// as propriedade sao iguais das functions
class App extends Component {
  constructor () {
    super()
    console.log('constructor')
    this.state = {
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('componenteWillMount')
  }

  componentDidMount () {
    // Isso tambem executa do lado do servidos, nao fazer manipulaçao de DOM.
    console.log('componenteDidMount')
  }

  render () {
    console.log('render')

    return (
      <div>
        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          this.setState({
            showTimer: !this.state.showTimer
          })
        }}
        > Show / Hide Timer</button>
      </div>
    )
  }
}

export default App

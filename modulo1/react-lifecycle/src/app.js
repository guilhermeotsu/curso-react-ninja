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
      time: 0,
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

  componentWillReceiveProps (nextProps) {
    // proximas propriedade que serao passadas para o componente
    console.log('componentWillReceiveProps', this.state.time, nextProps)
  }

  render () {
    console.log('render')

    return (
      <div>
        <Timer time={this.state.time} />
        <button onClick={() => {
          this.setState({
            time: this.state.time + 10
          })
        }}> Add + 10 </button>
      </div>
    )
  }
}

export default App

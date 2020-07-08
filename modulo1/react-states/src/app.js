'use strict'

import React, { Component } from 'react'

// para um componente ser statefull (componente que gerencia estado)
// é necessario que ele extenda de Componente ou seja um React.createClass
class App extends Component {
  constructor () {
    super()
    // setando o estado inicial da aplicação
    this.state = {
      text: 'paizao'
    }
  }

  render () {
    return (
      <div onClick={() => this.setState({
        text: 'mudou o estado do pai'
      })}
      >
        {this.state.text}
      </div>
    )
  }
}

export default App

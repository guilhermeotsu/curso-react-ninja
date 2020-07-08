'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'

// para um componente ser statefull (componente que manipula estado)
// é necessario que ele extenda de Componente ou seja um React.createClass
// funçoes puras nao manipulam estados
class App extends Component {
  constructor () {
    super()
    // setando o estado inicial da aplicação
    this.state = {
      color: 'tomato'
    }
  }

  render () {
    return (
      <div>
        <Square color={this.state.color} />
        {['black', 'blue', 'green'].map(color => (
          <Button
            key={color}
            handleClick={() => this.setState({ color })}
          >
            {color}
          </Button>
        ))}
      </div>
    )
  }
}

export default App

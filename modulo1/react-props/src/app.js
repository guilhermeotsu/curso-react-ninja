'use strict'

import React from 'react'
import Square from './square'

// para renderizar é necessario extender a classe
// as propriedade sao iguais das functions
class App extends React.Component {
  render () {
    return (
      <div
        className='container'
        onClick={function (e) {
        alert('clicado')
      }}
      >
        <Square />
      </div>
    )
  }
}

export default App

'use strict'

import React from 'react'
import Square from './square'

// para renderizar é necessario extender a classe
// as propriedade sao iguais das functions
class App extends React.Component {
  render () {
    return (
      <div className='container'>
        {['blue', 'black', 'green'].map((currentColor) => (
          // serve para quanto iterar element, pela key o react sabe qual element esta sendo renderizado
          // e qual element está sendo modificado
          <Square key={currentColor} color={currentColor} />
        ))}
      </div>
    )
  }
}

export default App

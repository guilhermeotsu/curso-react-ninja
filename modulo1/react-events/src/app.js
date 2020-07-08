'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'

// para renderizar é necessario extender a classe
// as propriedade sao iguais das functions
class App extends Component {
  render () {
    return (
      <div>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

export default App

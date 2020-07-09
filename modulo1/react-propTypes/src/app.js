'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div>
        <Button handleClick={() => (
          alert('pai ta chato')
        )}>Click me</Button>
        pai ta chato
      </div>
    )
  }
}

export default App

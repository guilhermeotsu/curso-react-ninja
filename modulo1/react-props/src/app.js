'use strict'

import React from 'react'
import Title from './title'

// para renderizar é necessario extender a classe
// as propriedade sao iguais das functions
class App extends React.Component {
  reunder () {
    return (
      <div className='container'>
        <Title name='pai' />
      </div>
    )
  }
}

export default App

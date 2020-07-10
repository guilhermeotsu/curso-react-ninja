'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

// Esse componente (statefull) irá gerenciar todos os estados dos outros componentes (stateless) que estao abaixo dele
// Presentational Components, Dumb components, sao componentes apenas de apresentaçao, pode ser dizer que sao os componentes stateless, ele nao gerencia estado
// Container Components, Smart Components, sao componentes que possuem estados e os gerenciam
class App extends Component {
  constructor () {
    super()
    this.state = { 

    }
  }

  render () {
    return <AppContent />
  }
}

export default App

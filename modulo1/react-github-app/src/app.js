'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

// Esse componente (statefull) irá gerenciar todos os estados dos outros componentes (stateless) que estao abaixo dele
// Presentational Components, Dumb components, sao componentes apenas de apresentaçao, pode ser dizer que sao os componentes stateless, ele nao gerencia estado
// Container Components, Smart Components, sao componentes que possuem estados e os gerenciam
// App é o nosso Container Component
class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Guilherme Otsu',
        repos: 12,
        followers: 4,
        following: 23,
        updated: '2020-07-09T18:53:05Z',
        created: '2017-03-29T17:19:33Z',
        avatar: 'https://avatars2.githubusercontent.com/u/26774003?v=4',
        login: 'guilhermeotsu'
      },
      repos: [
        {
          name: 'Github App repos',
          link: '#'
        }
      ],
      starred: [
        {
          name: 'react-libs',
          link: '#'
        }
      ]
    }
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App

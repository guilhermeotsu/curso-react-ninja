'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

// Esse componente (statefull) irá gerenciar todos os estados dos outros componentes (stateless) que estao abaixo dele
// Presentational Components, Dumb components, sao componentes apenas de apresentaçao, pode ser dizer que sao os componentes stateless, ele nao gerencia estado
// Container Components, Smart Components, sao componentes que possuem estados e os gerenciam
// App é o nosso Container Component
class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }

    inputvalue: null
  }

  handleSearch (e) {
    this.inputvalue = e.target.value
    const key = e.which || e.keyCode
    const ENTERKEY = 13
    if (key === ENTERKEY) {
      ajax()
        .get(`https://api.github.com/users/${this.inputvalue}`)
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
              updated: result.updated_at,
              created: result.created_at,
              avatar: result.avatar_url,
              login: result.login
            }
          })
        })
    }
  }

  handleClickRepos () {
    ajax()
      .get(`https://api.github.com/users/${this.inputvalue}/repos`)
      .then(result => {
        this.setState({
          repos: result.map(res => ({
            name: res.name,
            link: res.html_url
          }))
        })
      })
  }

  handleClickFavs () {
    ajax()
      .get(`https://api.github.com/users/${this.inputvalue}/starred`)
      .then(result => {
        this.setState({
          starred: result.map(res => ({
            name: res.name,
            link: res.html_url
          }))
        })
      })
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={e => this.handleSearch(e)}
        handleClickRepos={() => this.handleClickRepos()}
        handleClickFavs={() => this.handleClickFavs()}
      />
    )
  }
}

export default App

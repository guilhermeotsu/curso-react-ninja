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
      starred: [],
      isFetching: false
    }
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const key = e.which || e.keyCode
    const ENTERKEY = 13
    if (key === ENTERKEY) {
      this.setState({
        isFetching: true
      })
      ajax()
        .get(this.getGitHubApiUrl(value))
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
            },
            repos: [],
            starred: []
          })
        })
        .always(() => {
          this.setState({
            isFetching: false
          })
        })
    }
  }

  // handleClick éuma função que retorna outra função, ou seja, estamos passando via Props o retorno de handleClick,
  // que é outra funçao, já que o é necessario passsar uma função para o AppContent
  handleClick (type) {
    return e => {
      const user = this.state.userinfo.login
      ajax()
        .get(this.getGitHubApiUrl(user, type))
        .then(result => {
          this.setState({
            [type]: result.map(res => ({
              id: res.id,
              name: res.name,
              link: res.html_url
            }))
          })
        })
    }
  }

  render () {
    return (
      <AppContent
        {...this.state}
        handleSearch={e => this.handleSearch(e)}
        handleClickRepos={this.handleClick('repos')}
        handleClickFavs={this.handleClick('starred')}
      />
    )
  }
}

export default App

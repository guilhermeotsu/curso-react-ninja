'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

const initialReposState = {
  repos: [],
  pagination: {
    total: 1,
    activePage: 1
  }
}

// Esse componente (statefull) irá gerenciar todos os estados dos outros componentes (stateless) que estao abaixo dele
// Presentational Components, Dumb components, sao componentes apenas de apresentaçao, pode ser dizer que sao os componentes stateless, ele nao gerencia estado
// Container Components, Smart Components, sao componentes que possuem estados e os gerenciam
// App é o nosso Container Component
class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: initialReposState,
      starred: initialReposState,
      isFetching: false
    }

    this.perPage = 5
  }

  getGitHubApiUrl (username, type, page = 1) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}?per_page=${this.perPage}&page=${page}`
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
            repos: initialReposState,
            starred: initialReposState 
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
  handleClick (type, page) {
    return e => {
      const user = this.state.userinfo.login
      ajax()
        .get(this.getGitHubApiUrl(user, type, page))
        .then((result, xhr) => {
          const linkHeader = xhr.getResponseHeader('Link') || ''
          const totalPage = linkHeader.match(/&page=(\d+)>; rel="last/)
          this.setState({
            [type]: {
              repos: result.map(res => ({
                id: res.id,
                name: res.name,
                link: res.html_url
              })),
              pagination: {
                total: totalPage ? +totalPage[1] : this.state[type].pagination.total,
                activePage: page
              }
            }
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
        handlePagination={(type, page) => this.handleClick(type, page)()}
      />
    )
  }
}

export default App

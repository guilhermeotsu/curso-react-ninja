'use strict'

import React, { PropTypes } from 'react'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'
import style from './app-content.css'

// !! dentro do userinfo esta transformando a prop em booleano
const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  handleClickRepos,
  handleClickFavs
}) => (
  <div className={style.app}>
    <Search handleSearch={handleSearch} isFetching={isFetching} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && (
      <Actions
        handleClickRepos={handleClickRepos}
        handleClickFavs={handleClickFavs}
      />
    )}

    {!!repos.length && (
      <Repos className='repos' title='Repositório' repos={repos} />
    )}

    {!!starred.length && (
      <Repos className='starred' title='Favoritos' repos={starred} />
    )}
  </div>
)

AppContent.propType = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClickRepos: PropTypes.func.isRequired,
  handleClickFavs: PropTypes.func.isRequired
}

export default AppContent

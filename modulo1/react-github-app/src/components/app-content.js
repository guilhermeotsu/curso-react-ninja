'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

// !! dentro do userinfo esta transformando a prop em booleano
const AppContent = ({ userinfo, repos, starred, handleSearch }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions />}

    {!!repos.length && (
      <Repos
        className='repos'
        title='Repositório'
        repos={repos}
      />
    )}

    {!!starred.length && (
      <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
      />
    )}
  </div>
)

AppContent.propType = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent

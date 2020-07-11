'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

// !! dentro do userinfo esta transformando a prop em booleano
const AppContent = ({ userinfo, repos, starred }) => (
  <div className='app'>
    <Search />
    {!!userinfo && <UserInfo 
      username={userinfo.username} 
      repos={userinfo.repos}
      followings={userinfo.following}
      followers={userinfo.followers}
      created={userinfo.created}
      updated={userinfo.updated}
      />}

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
  userinfo: PropTypes.object.isRequired, 
  repos: PropTypes.array.isRequired, 
  starred: PropTypes.array.isRequired
}

export default AppContent

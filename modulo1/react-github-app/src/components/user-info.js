'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.avatar} />
    <h1 className='user-name'>
      <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
    </h1>
    <ul>
      <li>Criando em: {userinfo.created}</li>
      <li>Ultima atualização: {userinfo.updated}</li>
    </ul>

    <ul className='repos-info'>
      <li>Quantidade de repositórios: {userinfo.repos} </li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.followings}</li>
    </ul>
  </div>
)

UserInfo.PropTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    followings: PropTypes.number.isRequired,
    created: PropTypes.instanceOf(Date).isRequired,
    updated: PropTypes.instanceOf(Date).isRequired,
    avatar: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
  })
}

export default UserInfo

'use strict'

import React from 'react'

const UserInfo = ({ username, repos, followers, followings, created, updated }) => (
  <div className='user-info'>
    <img src='https://avatars2.githubusercontent.com/u/26774003?v=4' />
    <h1 className='user-name'>
      <a href='https://github.com/guilhermeotsu'>{username}</a>
    </h1>
    <ul>
      <li>Criando em: {created}</li>
      <li>Ultima atualização: {updated}</li>
    </ul>

    <ul className='repos-info'>
      <li>Quantidade de repositórios: {repos} </li>
      <li>Seguidores: {followers}</li>
      <li>Seguindo: {followings}</li>
    </ul>
    </div>
)

export default UserInfo

'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars2.githubusercontent.com/u/26774003?v=4' />
    <h1 className='user-name'>
      <a href='https://github.com/guilhermeotsu'>Guilherme Otsu</a>
    </h1>
    <ul>
      <li>Criando em: 2017-03-29T17:19:33Z</li>
      <li>Ultima atualização: 2020-07-09T18:53:05Z</li>
    </ul>

    <ul className='repos-info'>
      <li>Quantidade de repositórios: 17</li>
      <li>Seguidores: 4</li>
      <li>Seguindo: 17</li>
    </ul>
  </div>
)

export default UserInfo

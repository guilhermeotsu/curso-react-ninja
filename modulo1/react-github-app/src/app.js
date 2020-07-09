'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input type='search' placeholder='Digite o nome do usuário' />
    </div>
    <div className='user-info'>
      <img src='https://avatars2.githubusercontent.com/u/26774003?v=4' />
      <h1>
        <a href='https://github.com/guilhermeotsu'>  
          Guilherme Otsu
        </a>
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

      <div className='actions'>
        <button>Ver repos</button>
        <button>Ver favs</button>
      </div>

      <div className='repos'>
        <h2>
          Repositórios
        </h2>
        <ul>
          <li>
            <a href='#'>
              Nome do repositórios
            </a>
          </li>
        </ul>
      </div>

      <div className='starred'>
        <h2>
          Favoritos
        </h2>
        <ul>
          <li>
            <a href='#'>
              Nome dos repositorios
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default App

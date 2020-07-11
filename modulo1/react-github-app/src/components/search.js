'use strict'

import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = () => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário'
      onKeyUp={(e) => {
        const value = e.target.value
        const key = e.which || e.keyCode
        const ENTERKEY = 13
        if (key === ENTERKEY) {
          ajax().get(`https://api.github.com/users/${value}`)
            .then((result) => {
              console.log(result)
            })
        }
      }}
    />
  </div>
)

export default Search

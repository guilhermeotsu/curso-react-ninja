'use strict'

import React, { PropTypes } from 'react'
import style from './search.css'

const Search = ({ handleSearch, isFetching }) => (
  <div className={style.search}>
    <input
      type='search'
      placeholder='Digite o nome do usuário'
      disabled={isFetching}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.PropTypes = {
  handleSearch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default Search

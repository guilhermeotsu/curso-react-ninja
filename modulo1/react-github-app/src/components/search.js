'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch, isFetching }) => (
  <div className='search'>
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

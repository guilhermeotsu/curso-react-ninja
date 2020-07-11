'use strict'

import React from 'react'

const Actions = ({ handleClickRepos, handleClickFavs }) => (
  <div className='actions'>
    <button onClick={handleClickRepos}>Ver repos</button>

    <button onClick={handleClickFavs}>Ver favs</button>
  </div>
)

export default Actions

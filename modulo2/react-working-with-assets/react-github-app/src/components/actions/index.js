'use strict'

import React, { PropTypes } from 'react'
import style from './actions.css'

const Actions = ({ handleClickRepos, handleClickFavs }) => (
  <div className={style.actions}>
    <button onClick={handleClickRepos}>Ver repos</button>

    <button onClick={handleClickFavs}>Ver favs</button>
  </div>
)

Actions.propTypes = {
  handleClickRepos: PropTypes.func.isRequired,
  handleClickFavs: PropTypes.func.isRequired
}

export default Actions

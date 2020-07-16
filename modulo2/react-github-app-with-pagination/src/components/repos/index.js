'use strict'

import React, { PropTypes } from 'react'
import style from './repos.css'

const Repos = ({ className, title, repos }) => (
  <div className={style[`${className}`]}>
    <h2>{title}</h2>
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos

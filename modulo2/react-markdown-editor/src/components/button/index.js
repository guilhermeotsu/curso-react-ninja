'use strict'

import React, { PropTypes } from 'react'
import './style.css'

const Button = ({ onClick, children, kind }) => (
  <button className={`button ${kind}`} onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Button

'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Button = ({ onClick, children, kind }) => (
  <button className={`button ${kind}`} onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['success', 'danger'])
}

export default Button

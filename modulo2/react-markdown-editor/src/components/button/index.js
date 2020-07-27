'use strict'

import React, { PropTypes } from 'react'

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Button

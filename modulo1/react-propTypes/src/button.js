'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>{children}</button>
)

// propTypes é o mapeamento das props que o componente deve receber
Button.propTypes = {
  // prop handleClick deve ser passado uma funçao
  handleClick: React.PropTypes.func.isRequired
}

export default Button

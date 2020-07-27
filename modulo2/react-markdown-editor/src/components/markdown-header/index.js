'use strict'

import React, { PropTypes } from 'react'

const MarkdownHeader = ({ isSaving, handleRemove }) => (
  <header>
    <p>{isSaving ? 'Salvando...' : 'Salvo!'}</p>
    <button onClick={handleRemove}>Remove</button>
  </header>
)

MarkdownHeader.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default MarkdownHeader

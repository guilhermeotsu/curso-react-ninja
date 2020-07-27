'use strict'

import React, { PropTypes } from 'react'

const MarkdownHeader = ({ isSaving, handleRemove, handleCreate }) => (
  <header>
    <p>{isSaving ? 'Salvando...' : 'Salvo!'}</p>
    <button onClick={handleRemove}>Remover</button>
    <button onClick={handleCreate}>Criar novo</button>
  </header>
)

MarkdownHeader.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownHeader

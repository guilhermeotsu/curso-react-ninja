'use strict'

import React, { PropTypes } from 'react'
import Button from 'components/button'

const MarkdownHeader = ({ isSaving, handleRemove, handleCreate }) => (
  <header>
    {isSaving !== null && (
      <p>{isSaving ? 'Salvando...' : 'Salvo!'}</p>
    )} 

    <Button onClick={handleCreate} kind={'success'} >
      Criar novo
    </Button>
    <Button onClick={handleRemove} kind={'danger'} >
      Remover
    </Button>
  </header>
)

MarkdownHeader.propTypes = {
  isSaving: PropTypes.bool,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownHeader
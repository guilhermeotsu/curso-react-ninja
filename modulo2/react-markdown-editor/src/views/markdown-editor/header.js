'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const MarkdownHeader = ({ title, isSaving, handleRemove, handleCreate }) => (
  <header>
    <input value={title} placeholder='No title' type='text'/>
    
    <SaveMessage isSaving={isSaving} />

    <Button onClick={handleCreate} kind={'success'} >
      Criar novo
    </Button>
    <Button onClick={handleRemove} kind={'danger'} >
      Remover
    </Button>
  </header>
)

MarkdownHeader.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownHeader

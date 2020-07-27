'use strict'

import React, { PropTypes } from 'react'

const MarkdownHeader = ({ isSaving }) => (
  <header>
    { isSaving ? 'Salvando...' : 'Salvo!' }
  </header>
)

MarkdownHeader.propTypes = {
  isSaving: PropTypes.bool.isRequired
}

export default MarkdownHeader
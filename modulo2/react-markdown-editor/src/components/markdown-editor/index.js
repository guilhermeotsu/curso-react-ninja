'use strict'

import React, { PropTypes } from 'react'
import Header from 'components/markdown-header'

const Markdown = ({
  value,
  isSaving,
  handleChange,
  handleRemove,
  getMarkup
}) => (
  <div className='container'>
    <Header isSaving={isSaving} handleRemove={handleRemove} />
    <textarea value={value} onChange={handleChange} autoFocus />
    <div dangerouslySetInnerHTML={getMarkup()} />
  </div>
)

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default Markdown

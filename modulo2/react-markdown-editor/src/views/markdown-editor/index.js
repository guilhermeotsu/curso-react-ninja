'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Files from './files'

const Markdown = ({
  value,
  handleChange,
  getMarkup,
  textareaRef,
  storageFiles,
  handleOpenFile,
  ...props
}) => (
  <div className='container'>
    <Header {...props} />
    <Files files={storageFiles} handleOpenFile={handleOpenFile} />
    <div className='editor'>
      <textarea value={value} onChange={handleChange} autoFocus ref={textareaRef} />
      <div dangerouslySetInnerHTML={getMarkup()} />
    </div>
  </div>
)

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default Markdown

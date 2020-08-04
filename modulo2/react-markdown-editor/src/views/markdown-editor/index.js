'use strict'

import React, { PropTypes } from 'react'
import Header from './header'

const Markdown = ({
  value,
  handleChange,
  getMarkup,
  textareaRef,
  ...props
}) => (
  <div className='container'>
    <Header {...props} />
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

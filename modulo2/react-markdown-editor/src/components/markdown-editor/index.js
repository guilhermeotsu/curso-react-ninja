'use strict'

import React, { PropTypes } from 'react'

const Markdown = ({ value, handleChange, getMarkup }) => (
  <div className='container'>
    <button onClick={() => localStorage.setItem('md', value)}>Salvar</button>
    <textarea value={value} onChange={handleChange} autoFocus />
    <div dangerouslySetInnerHTML={getMarkup()} />
  </div>
)

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Markdown
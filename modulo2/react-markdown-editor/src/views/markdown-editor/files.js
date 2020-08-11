'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Files = ({ files, handleOpenFile }) => (
  <div className='files-list-container'>
    <h2>Files</h2>
    <ul>
      { Object.keys(files).map((fileId) => (
        <li key={fileId}>
          <button onClick={handleOpenFile(fileId)}>
            {fileId}
          </button>
        </li>
      )) }
    </ul>
  </div>
)

Files.PropTypes = {
  files: PropTypes.object,
  handleClick: PropTypes.func
}

export default Files

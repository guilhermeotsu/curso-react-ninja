'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='otsuu' lastname={0} />
      </div>
    )
  }
})

export default App

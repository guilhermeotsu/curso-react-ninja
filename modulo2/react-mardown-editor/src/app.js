'use strict'

import React, { Component } from 'react'

import './css/style.css'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      value: ''
    }

    // Para obter o valor do textarea é necessario que ele tenha um name, para identifica-lo no evento passado
    this.handleSubmit = (e) => {
      e.preventDefault()

      this.setState({
        value: e.target.name.textarea.value
      })
    }
  }

  render () {
    return (
      <div className='editor'>
        <form onSubmit={handleSubmit}>
          <textarea name='textarea' />
          <button type='submit'>Render Markup</button>
        </form>

        <div className='view'>
          {this.state.value}
        </div>
      </div>
    )
  }
}

export default App

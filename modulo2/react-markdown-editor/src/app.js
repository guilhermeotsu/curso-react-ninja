'use strict'

import React, { Component } from 'react'
import Mardown from 'components/markdown-editor'
import marked from 'marked'
import highlightjs from 'highlight.js'

import './css/style.css'

marked.setOptions({
  highlight: (code) => {
    return highlightjs.highlightAuto(code).value
  }
})

class App extends Component {
  constructor () {
    super ()
    this.state = {
      value: ''
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }
    
    this.getMarkup = () => {
      return {
        __html: marked(this.state.value)
      }
    }
  }

  render () {
    return (
      <Mardown
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
      />
    )
  }
}

export default App

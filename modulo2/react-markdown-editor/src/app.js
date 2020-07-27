'use strict'

import React, { Component } from 'react'
import Mardown from 'components/markdown-editor'
import marked from 'marked'

import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if(lang && hljs.getLanguage(lang, code)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()
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
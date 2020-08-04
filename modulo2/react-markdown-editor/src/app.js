'use strict'

import React, { Component } from 'react'
import Mardown from 'views/markdown-editor'
import marked from 'marked'

import './css/style.css'

import('highlight.js').then(hljs => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang, code)) {
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
      value: '',
      isSaving: null
    }

    this.handleChange = e => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return {
        __html: marked(this.state.value)
      }
    }
    
    this.handleSave = () => {
      if(this.state.isSaving) {
        const value = this.state.value
        localStorage.setItem('md', value)
        this.setState({
          isSaving: false
        })
      }
    }
    
    this.handleRemove = () => {
      localStorage.removeItem('md')
    }

    this.handleCreate = () => {
      this.setState({ value: '' })
      this.textarea.focus()
    }

    // Referencia do textArea para manipular o foco dele ao clicar no novo arquivo
    this.textareaRef = (node) => {
      this.textarea = node
    }
  }

  componentDidMount () {
    const value = localStorage.getItem('md')
    this.setState({ value: value || '' })
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 500)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Mardown
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
      />
    )
  }
}

export default App

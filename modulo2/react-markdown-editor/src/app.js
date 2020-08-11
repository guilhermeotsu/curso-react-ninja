'use strict'

import React, { Component } from 'react'
import Markdown from 'views/markdown-editor'
import marked from 'marked'
import { v4 } from 'node-uuid'

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

    this.clearState = () => ({
      value: '',
      id: v4()
    })

    this.state = {
      ...this.clearState(),
      isSaving: null,
      title: '',
      files: {}
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
        const newFile = {
          title: this.state.title || 'no title',
          content: this.state.value
        }
        localStorage.setItem(this.state.id, JSON.stringify(newFile))
        this.setState({
          isSaving: false,
          files: {
            ...this.state.files,
            [this.state.id]: newFile
          }
        })
      }
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }
  
    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      let files = Object.keys(this.state.files).reduce((acc, fileId) => {
        return fileId === this.state.id ? acc : {
          ...acc,
          [fileId]: this.state.files[filesId]
        }
      }, {})

      this.setState({ files })
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    // Referencia do textArea para manipular o foco dele ao clicar no novo arquivo
    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.handleOpenFile = (key) => () => {
      this.setState({
        title: this.state.files[key].title,
        id: key,
        value: this.state.files[key].content
      })
    }
  }
  
  componentDidMount () {
    const files = Object.keys(localStorage)
    this.setState({ 
      files: files.filter(id => id.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/)).reduce((acc, fileId) => (
        {
          ...acc,
          [fileId]: JSON.parse(localStorage.getItem(fileId))
        }
      ), {})
    })
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
      <Markdown
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
        storageFiles={this.state.files}
        handleOpenFile={this.handleOpenFile}
        title={this.state.title}
      />
    )
  }
}

export default App

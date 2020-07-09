'use strict'
// es2015
import App from './app'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const renderApp = NextApp => {
  ReactDOM.render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

// apenas em dev
if (module.hot) {
  module.hot.accept('./app', () => {
    // prox atualizaçao do app
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}

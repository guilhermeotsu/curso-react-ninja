'use strict'

import React from 'react'

class Timer extends React.Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
    this.intervalTimer
  }

  // componente montou na tela (Inicializa o contador)
  componentDidMount () {
    this.invervalTimer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  // quando o timer for desmontado, parar o relogio
  componentWillUnmount () {
    clearInterval(this.invervalTimer)
  }

  // proximas propriedade que serao passadas para o componente
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps)
  }

  // o metodo é executado sempre que novas props sao mandadas para o componente
  // aqui se pode verificar se o proximo valor do componente for igual ao anterior (atual)
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state, nextState)
    return this.state.time !== nextState.time
  }

  // essa funçao é chamada um pouco antes do componente ser renderizado
  componentWillUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state, nextState)
  }

  // método é executado após a renderizaçao do componente com o estado/props atualizados
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidupdate', this.props, prevProps)
  }

  render () {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer

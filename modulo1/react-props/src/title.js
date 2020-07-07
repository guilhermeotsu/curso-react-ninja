'use strict'

import React from 'react'

const Title = React.createClass({
  // adicionando propriedades padrão para o componente
  getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      lastname: 'pai ta desconhecido'
    }
  },
  render: function () {
    return (
      <h1>pai ta chato  {this.props.name + ' ' + this.props.lastname}</h1>
    )
  }
})

export default Title

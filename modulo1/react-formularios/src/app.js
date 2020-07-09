'use strict'

import React from 'react'

// input se refere a um componente gerado pelo react, e nao a tag input do html, passando props
// para permitir que o input seja modificado é necessário o metodo onChange
// essa forma de modificar o input é chamada de controled components (mais recomendado), mas da para fazer de outras formas

// Como identificar componentes controled
// input --> Propriedade value
// checkbox --> Propriedade checked
// radio --> Propriedade value (sao controlados pelo nome)

// basicamente usar defaultValue e value com onChange

// onChange dentro do form, voce tem controle a todos os elementos do form
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      selectOption: '1',
      checked: false,
      value: 'init value'
    }
  }
  render () {
    return (
      <div>
        <form 
          onSubmit={e => {
            e.preventDefault()
            console.log('event submit form:: ', e)
          }}

          onChange={e => {
            console.log('name do campo:: ', e.target.name)
            console.log('value do campo:: ', e.target.value)
          }}
        >
          <input
            name='inputdocria'
            type='text'
            value={this.state.value}
            onChange={e => {
              this.setState({
                value: e.target.value
              })
            }}
          />
          <label>
            <input
              type='checkbox'
              checked={this.state.checked}
              onChange={() => {
                this.setState({ checked: !this.state.checked })
              }}
            />
            checkbox
          </label>
          <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
          <input type='radio' name='rd' value='2' /> Radio 2
          <select 
            value={this.state.selectOption}
            onChange={e => {
              this.setState({ selectOption: e.target.value })
            }}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          
          <textarea name='textAreaDoCria' defaultValue='default value text area' />

          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}
export default App

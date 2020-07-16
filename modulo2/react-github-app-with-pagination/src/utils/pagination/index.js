'use strict'

const pagination = ({ total, activePage }) => {
  // Cria um Array do tamanho do total e mapea cada propriedade passando index + 1
  // return Array.apply(null, { length: total }).map((_, index) => ++index) --> ES5
  return Array.from({ length:total }, (_, i) => ++i) // --> ES6
}

export default pagination

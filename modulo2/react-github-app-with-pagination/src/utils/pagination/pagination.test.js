'use strict'

import { expect } from 'chai'
import pagination from './index'

it('pagina deve ser uma função', () => {
  expect(pagination).to.be.a('function')
})

it('pagination({ total: 1, activePage: 1}) deve retornar [1]', () => {
  expect(pagination({ total: 1, activePage: 1 })).to.be.deep.equal([1])
})

it('pagination({ total: 2, activePage: 2 }) deve retornar [1, 2]', () => {
  expect(pagination({ total: 2, activePage: 2 })).to.be.deep.equal([1, 2])
})

// Independente da pagina ativa vai ser o array inteiro :
it('pagination({ total: 5, activePage: 1 }) deve retornar [1, 2, 3, 4, 5]', () => {
  expect(pagination({ total: 5, activePage: 1 })).to.be.deep.equal([1, 2, 3, 4, 5])
})

it('pagination({ total: 6, activePage: 1 }) deve retornar [1, 2, 3, "...", 6]', () => {
  expect(pagination({ total: 6, activePage: 1 })).to.be.deep.equal([1, 2, 3, "...", 6])
})

it('pagination({ total: 6, activePage: 2 }) deve retornar [1, 2, 3, "...", 6]', () => {
  expect(pagination({ total: 6, activePage: 2 })).to.be.deep.equal([1, 2, 3, "...", 6])
})

it('pagination({ total: 5, activePage: 3 }) deve retornar [1, 2, 3, 4, 5, 6]', () => {
  expect(pagination({ total: 6, activePage: 3 })).to.be.deep.equal([1, 2, 3, 4, 5, 6])
})
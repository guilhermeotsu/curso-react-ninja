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

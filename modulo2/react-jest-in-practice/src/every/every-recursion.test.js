'use strict'

import { expect } from 'chai'
import every from './every-recursion'

it('every deve ser uma função', () => {
  expect(every).to.be.a('function')
})

it('every([]) deve retornar true', () => {
  expect(every([])).to.be.true
})

it('every([1, 2], (item) => item > 0) deve retornar true', () => {
  expect(every([1, 2], (item) => item > 0)).to.be.true
})

it('every([1, 2], (item) => item < 0) deve retornar false', () => {
  expect(every([1, 2], (item) => item < 0)).to.be.false
})

it('every([0, 1]) deve retornar false', () => {
  expect(every([0, 1])).to.be.false
})

it('every(["", 1, 2, 3]) deve retornar false', () => {
  expect(every(["", 1, 2, 3])).to.be.false
})

it('every([10, 20, 30], (item, index) => index > 1) deve retornar false', () => {
  expect(every([10, 20, 30], (item, index) => index > 1)).to.be.false
})

it('every([1, 2, 3], (item, index, arr) => arr.length >= index) deve retornar true', () => {
  expect(every([1, 2, 3], (item, index, arr) => arr.length >= index)).to.be.true 
})
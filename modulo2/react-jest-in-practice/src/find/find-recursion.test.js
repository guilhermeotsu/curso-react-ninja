'use strict'

import find from './find-recursion'
import { expect } from 'chai'

it('find deve ser uma função', () => {
  expect(find).to.be.a('function')
})

it('find([]) deve retornar undefined', () => {
  expect(find([])).to.be.an('undefined')
})

it('find([1, 2, 3], (item) => item) deve retornar 1', () => {
  expect(find([1, 2, 3], (item) => item)).to.be.equal(1)
})

it('find([0, 1, 5], (item) => item) deve retornar 1', () => {
  expect(find([0, 1, 5], (item) => item)).to.be.equal(1)
})

it('find([10, 20, 30], (item, index) => item > index) deve retornar 10', () => {
  expect(find([10, 20, 30], (item, index) => item > index)).to.be.equal(10)
})

it('find([10, 11, 12], (item, index, array) => index <= array.length) deve retornar 12', () => {
  expect(find([10, 11, 12], (item, index, array) => index <= array.length)).to.be.equal(10)
})
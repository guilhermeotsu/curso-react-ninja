'use strict'

import { expect } from 'chai' 
import some from './some-recursion'

it('some deve ser uma função', () => {
  expect(some).to.be.a('function')
})

it('some([]) deve retornar false', () => {
  expect(some([])).to.be.false
})

it('some([1, 2, 3], (item) => item) deve retornar true', () => {
  expect(some([1, 2, 3], (item) => item)).to.be.true
})

it('some(["", false, true], (item) => item) deve retornar true', () => {
  expect(some(["", false, true], (item) => item)).to.be.true
})

it('some([4, 5, 6, 7], (item) => item > 8) deve retornar false', () => {
  expect(some([4, 5, 6, 7], (item) => item > 8)).to.be.false
})

it('some([1, 2, 3], (item, index) => index + 1 === item) deve retornar true', () => {
  expect(some([1, 2, 3], (item, index) => index + 1 === item)).to.be.true
})

it('some([1, 2, 3], (item, index) => index > item) deve retornar false', () => {
  expect(some([1, 2, 3], (item, index) => index > item)).to.be.false
})

it('some([4, 5, 6], (item, index, array) => array.length < index + item) deve retornar true', () => {
  expect(some([4, 5, 6], (item, index, array) => array.length < index + item)).to.be.true  
})
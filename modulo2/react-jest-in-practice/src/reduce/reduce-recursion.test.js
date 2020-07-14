'use strict' 

import { expect } from 'chai'
import reduce from './reduce-recursion'

it('reduce deve ser uma função', () => {
  expect(reduce).to.be.a('function')
})

it('reduce([1, 2, 3], (acc, item) => acc + item, 0) deve retornar 6', () => {
  expect(reduce([1, 2, 3], (acc, item) => acc + item, 0)).to.be.equal(6)
})

it('reduce([3, 4, 5], (acc, item) => acc + item, 0) deve retornar 12', () => {
  expect(reduce([3, 4, 5], (acc, item) => acc + item, 0)).to.be.equal(12)
})

it('reduce([3, 4, 5], (acc, item) => acc + item) deve retornar 12', () => {
  expect(reduce([3, 4, 5], (acc, item) => acc + item)).to.be.equal(12)
})

it('reduce([1, 2], (acc, item) => { acc["number-" + item] = item; return acc }, {}) deve retornar {"number-1": 1, "number-2": 2}', () => {
  const expected =  reduce([1, 2], (acc, item) => { 
    acc["number-" + item] = item; 
    return acc 
  }, {})
  expect(expected).to.be.deep.equal({"number-1": 1, "number-2": 2})
})

it('reduce([1, 2, 3], (acc, item, index) => acc + item + index, 0) deve retornar 9', () => {
  expect(reduce([1, 2, 3], (acc, item, index) => acc + item + index, 0)).to.be.equal(9)
})

it('reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) deve retornar 3', () => {
  const before = reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)
  const after = 3
  expect(before).to.be.equal(after)
})
'use strict'

import { expect } from 'chai'
import reverse from './reverse'

it('reverse deve ser uma funçao', () => {
  expect(reverse).to.be.a('function')
})

it('reverse([]) deve retornar []', () => {
  expect(reverse([])).to.be.deep.equal([])
})

it('reverse([0]) deve retornar [0]', () => {
  expect(reverse([0])).to.be.deep.equal([0])
})

it('reverse([1, 2]) deve retornar [2, 1]', () => {
  expect(reverse([1, 2])).to.be.deep.equal([2, 1])
})

it('reverse([3, 4, 5, 6]) deve retornar [6, 5, 4, 3]', () => {
  expect(reverse([3, 4, 5, 6])).to.be.deep.equal([6, 5, 4, 3])
})

it('reverse(["react", "ninja"]) deve retornar ["ninja", "react"]', () => {
  expect(reverse(["react", "ninja"])).to.be.deep.equal(["ninja", "react"])
})


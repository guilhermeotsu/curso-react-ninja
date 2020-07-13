'use strict'

import { expect } from 'chai'
import filter from './filter-recursion'

it("filter deve ser uma função", () => {
  expect(filter).to.be.a('function')
})

it("filter([1, 2, 3], (item) => item) deve retornar [1, 2, 3]", () => {
  expect(filter([1, 2, 3], (item) => item)).to.be.deep.equal([1, 2, 3])
})

it("filter([0, 1, 2], (item) => item) deve retornar [1, 2]", () => {
  expect(filter([0, 1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it("filter([1, 2], (item) => item > 1) deve retornar [2]", () => {
  expect(filter([1, 2], (item) => item > 1)).to.be.deep.equal([2])
})

it("filter([3, 4, 5], (item) => item > 3) deve retornar [4, 5]", () => {
  expect(filter([3, 4, 5], (item) => item > 3)).to.be.deep.equal([4, 5])
})

it("filter([2, 5, 8, 10], (item) => item % 2 === 0) deve retornar [2, 8, 10]", () => {
  expect(filter([2, 5, 8, 10], (item) => item % 2 === 0)).to.be.deep.equal([2, 8, 10])
})

it("filter([10, 20, 30, 40], (item, index) => index >= 2) deve retornar [30, 40]", () => {
  expect(filter([10, 20, 30, 40], (item, index) => index >= 2)).to.be.deep.equal([30, 40])
})

it("filter([1, 2], (item, index, array) => array.length >= index) deve retornar [[1, 2], [1, 2]]", () => {
  expect(filter([1, 2], (item, index, array) => array.length >= index)).to.be.deep.equal([1, 2], [1, 2])
})

it("filter() deve retornar []", () => {
  expect(filter()).to.be.deep.equal([])
})

it("filter([]) deve retornar []", () => {
  expect(filter()).to.be.deep.equal([])
})

it('filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)) deve retornar [1, 2, 3, 5]', () => {
  const before = filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item))
  expect(before).to.be.deep.equal([1, 2, 3, 5])
})
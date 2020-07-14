'use strict'

import { expect } from 'chai'
import map from './map'

it('map deve ser uma funçao', () => {
  expect(map).to.be.a('function')
})

it('map([], item => item) deve retornar []', () => {
  expect(map([], (item) => item)).to.be.deep.equal([])
})

it('map([1, 2], (item) => item) deve retornar [1, 2]', () => {
  expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('map([3, 4], (item) => item) deve retornar [3, 4]', () => {
  expect(map([3, 4], item => item)).to.be.deep.equal([3, 4])
})

it('map([5, 6], (item) => item + 1) deve retornar [6, 7]', () => {
  expect(map([5, 6], (item) => item + 1)).to.be.deep.equal([6 ,7])
})

it('map([10, 11], (item) => item + 2) deve retornar [12, 13]', () => {
  expect(map([10, 11], (item) => item + 2)).to.be.deep.equal([12, 13])
})

it('map([10, 20], (array, index) => index) deve retornar [0, 1]', () => {
  expect(map([10,20], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('map([1, 2], (array, index, [1, 2])) deve retornar [[1, 2], [1,2]]', () => {
  expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]])
})

it('map(1) deve retornar um TypeError', () => {
  let error
  try {
    map(1)
  } catch (err) {
    error = err
  }
  expect(error.name).to.be.equal('TypeError')
})

it('map(1) deve retornar um TypeError com a mensagem "Primeira parametro deve ser um array"', () => {
  let error
  try {
    map(1)
  } catch (err) {
    error = err
  }
  expect(error.name).to.be.equal('TypeError')
})


it('map([1, 2, 3], "function") deve retornar um TypeError', () => {
  let error
  try {
    map(1)
  } catch (err) {
    error = err
  }
  expect(error.name).to.be.equal('TypeError')
})

it('map([1, 2, 3], "function") deve retornar um TypeError com a mensagem "O segundo parametro deve ser uma função"', () => {
  let error
  try {
    map(1)
  } catch (err) {
    error = err
  }
  expect(error.name).to.be.equal('TypeError')
})
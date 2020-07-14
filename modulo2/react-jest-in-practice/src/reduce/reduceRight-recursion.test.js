'use strict'

import { expect } from 'chai'
import reduceRight from './reduceRight-recursion'

it('reduceRight deve ser uma funçao', () => {
  expect(reduceRight).to.be.a('function')
})

it('reduceRight([1, 2, 3], (acc, item) => acc + item) deve retornar 6', () => {
  expect(reduceRight([1, 2, 3], (acc, item) => acc + item)).to.be.equal(6)
})

it('reduceRight([1, 2, 3], (acc, item) => acc + item, 0) deve retornar 6', () => {
  expect(reduceRight([1, 2, 3], (acc, item) => acc + item, 0)).to.be.equal(6)
})

it('reduceRight(["do", "na", "fer"], (acc, item) => acc + item, "") deve retornar "fernando"', () => {
  expect(reduceRight(["do", "nan", "fer"], (acc, item) => acc + item, "")).to.be.equal('fernando')  
})

it('reduceRight([[0, 1], [2, 3], [4, 5]], (acc, item) => acc.concat(item)) deve retornar [4, 5, 2, 3, 0, 1]', () => {
 expect(reduceRight([[0, 1], [2, 3], [4, 5]], (acc, item) => acc.concat(item))).to.be.deep.equal([4, 5, 2, 3, 0, 1]) 
})
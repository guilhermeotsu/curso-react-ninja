'use strict'

const sum = require('./sum')

console.assert(
  typeof sum === 'function',
  'sum deve ser uma funçao'
)

console.assert(
  sum(1, 1) === 2,
  'somar 1 + 1 deve ser 2'
)

console.assert(
  sum(2, 3) === 5,
  'soma de 2 + 3 deve ser 5'
)
'use strict'

const map = (arr = [], func) => { 
  if(!Array.isArray(arr)) {
    throw new TypeError('Primeira parametro deve ser um array')
  }

  if(!(typeof func === 'function')) {
    throw new TypeError('O segundo parametro deve ser uma função')
  }

  let newarray = []

  for(let i = 0; i < arr.length; i++) {
    newarray.push(func(arr[i], i, arr))
  }
  return newarray
}

export default map;
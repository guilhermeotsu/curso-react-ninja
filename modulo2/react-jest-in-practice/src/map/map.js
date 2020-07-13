'use strict'

const map = (arr = [], func) => {
  if(typeof func !== 'function') {
    throw new TypeError('func is not a function')
  }

  let newarray = []

  for(let i = 0; i < arr.length; i++) {
    newarray.push(func(arr[i], i, arr))
  }
  return newarray
}

export default map;
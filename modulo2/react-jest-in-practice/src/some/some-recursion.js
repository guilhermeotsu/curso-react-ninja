'use strict'

const some = (arr, func) => {
  const counter = 0

  return (function someInternal(arrInternal, counter){
    const [head, ...tail] = arrInternal
    
    return arrInternal.length === 0 
    ? false  
    : func(head, counter, arr) 
      ? true
      : someInternal(tail, counter + 1)
  })(arr, counter)
}

export default some
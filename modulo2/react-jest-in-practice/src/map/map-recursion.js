'use strict'

const map = (arr = [], func = (item) => item) => {
  const counter = 0;
  // IIFE (Função auto executável)
  return (function mapInternal (arrInternal, counter) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0 ? [] : [
        func(head, counter, arr),
        ...mapInternal(tail, counter + 1)
    ] 
  })(arr, counter)  
}

export default map
'use strict' 

const isInitValueUndefined = (initVal) => initVal === undefined

const reduce = (arr, func, initval) => {
  // imutabilidade 
  const arrCp = isInitValueUndefined(initval) ? arr.slice(1) : arr
  const acc = isInitValueUndefined(initval) ? arr[0] : initval
  const counter = 0
  
  return (function reduceInternal(accInternal, arrInternal, counterInternal) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0 
      ? accInternal
      : reduceInternal(func(accInternal, head, counterInternal, arrCp), tail, counterInternal + 1)
  })(acc, arrCp, counter)  
}

export default reduce

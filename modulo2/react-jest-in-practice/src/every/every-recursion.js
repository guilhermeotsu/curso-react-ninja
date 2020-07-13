'use strict' 

const every = (arr = [], func = (item) => item) => {
  const counter = 0

  return (function everyInternal(arrInternal, counterInternal) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0 
      ? true
      : !func(head, counter, arr) 
        ? false 
        : everyInternal(tail, counterInternal + 1)

  })(arr, counter)
}

export default every
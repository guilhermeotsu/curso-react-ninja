'use strict'

const find = (arr, func) => {
  const counter = 0

  return (function findInternal(arrInternal, counterInternal) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0
      ? undefined
      : func(head, counterInternal, arr) 
        ? head
        : findInternal(tail, counterInternal + 1)
  })(arr, counter)
}

export default find
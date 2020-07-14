'use strict'

//const reverse = (arr = []) => {
  //const counter = arr.length
  //let newArray = []

  //return (function reverseInternal (arrInternal, counter) {
    //const head = arrInternal.slice(-1)[0]
    //const tail = arrInternal.slice(0, -1)

    //return counter === 0 
      //? newArray
      //: newArray.push(head) === arr.length 
        //? newArray
        //: reverseInternal(tail, counter - 1) 

  //})(arr, counter)
//}

// arr.slice(-1)[0] ---> pega o valor do ultimo elemento (head)
// arr.slice(0, -1) ---> pega os valor do indice 0 até o penultimo elemento (tail)
const reverse = (arr = []) =>  {
  return arr.length === 0 
    ? []
    : [
      arr.slice(-1)[0],
      ...reverse(arr.slice(0, -1))
    ]
}

export default reverse

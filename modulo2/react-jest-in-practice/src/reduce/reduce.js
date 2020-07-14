'use strict' 

const reduce = (arr, func, initval) => {
  let acc = initval
  let arrCp = arr

  if(initval === undefined) { 
    acc  = arr[0]
    arrCp = arr.slice(1)
  }

  for(let i = 0; i < arrCp.length; i++) {
    acc = func(acc, arrCp[i], i, arr)
  }
  return acc
}

export default reduce
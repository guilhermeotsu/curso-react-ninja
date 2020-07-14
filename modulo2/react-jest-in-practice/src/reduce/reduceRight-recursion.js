'use strict'

import mainReduceRecursion from './reduce-recursion'
import reverse from './../reverse/reverse'

const reduceRightRecursion = (arr, ...params) => mainReduceRecursion(reverse(arr), ...params)

export default reduceRightRecursion
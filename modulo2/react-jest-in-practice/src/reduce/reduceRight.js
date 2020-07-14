'use strict'

import mainReduce from './reduce-main'
import reverse from './../reverse/reverse'

const reduceRight = (arr, ...params) => mainReduce(reverse(arr), ...params)

export default reduceRight
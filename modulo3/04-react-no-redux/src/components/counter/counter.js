'use strict'

import React from 'react'

const Counter = ({ counter, handleDecrement, handleIncrement }) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleIncrement}>+</button>
  </div>
)

export default Counter

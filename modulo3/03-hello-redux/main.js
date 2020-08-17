'use strict'

// REDUCER 
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}

const { createStore } = Redux
const store = createStore(counter)

const $counter = document.querySelector('[data-js="counter"]')
const $buttons = document.querySelectorAll('button')

$buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const $data = button.dataset.js
    
    switch ($data) {
      case 'increment': { 
        store.dispatch({ type: $data.toUpperCase() })
        break
      }
      case 'decrement': { 
        store.dispatch({ type: $data.toUpperCase() })
        break
      }
    } 
  })
})

store.subscribe(() => {
  $counter.innerText = store.getState()
})
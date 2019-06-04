import React, { useReducer } from 'react'
import './App.css'

function reducer(state, action) {
  if (action.type === 'INCREMENT') return { count: state.count + 1 }
  if (action.type === 'DECREMENT') return { count: state.count - 1 }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div className='App'>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add 1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Subtract 1</button>
    </div>
  )
}

export default App

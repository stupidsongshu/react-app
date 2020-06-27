// import React, { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

export function Counter() {
  const [count1, setCount1] = useState<number>(0)
  const [count2, setCount2] = useState<number>(0)

  const handleClick1 = () => {
    setCount1(count1 + 1)
  }
  const handleClick2 = () => {
    setCount2(count2 + 1)
  }

  return (
    <div>
      <button onClick={handleClick1}>click1: {count1}</button>
      <button onClick={handleClick2}>click2: {count2}</button>
    </div>
  )
}


// 实现 useState
let state: any[] = []
let index = 0
function useState<T>(initialState: T): [T, (newState: T) => void] {
  const currIndex = index

  state[currIndex] = state[currIndex] || initialState
  function setState(newState: T) {
    state[currIndex] = newState
    render()
  }

  index++

  return [state[currIndex], setState]
}

export function render() {
  index = 0

  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  )
}

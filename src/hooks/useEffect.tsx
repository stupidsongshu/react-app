// import React, { useState, useEffect } from 'react'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Counter = function () {
  _depIndex = 0

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log('count1', count1)
  }, [count1])

  useEffect(() => {
    console.log('count1 ~')
  }, [count1])

  useEffect(() => {
    console.log('只执行一次')
  }, [])

  useEffect(() => {
    console.log('count2', count2)
  }, [count2])

  function handleClick1 () {
    setCount1(count1 + 1)
  }
  function handleClick2 () {
    setCount2(count2 + 1)
  }

  return <div>
    <button onClick={handleClick1}>click1: {count1}</button>
    <button onClick={handleClick2}>click2: {count2}</button>
  </div>
}

export default Counter


// 实现 useEffect
// let _deps: any[] | undefined = undefined
// function useEffect(callback: () => void, depArray?: any[]) {
//   console.log(_deps, depArray)

//   // 第二个参数不存在，每次渲染都会执行回调
//   if (!depArray) {
//     callback()
//     _deps = depArray
//     return
//   }

//   // 第二个参数存在
//   // 1. 依赖参数个数：多个，当其中一个依赖变了才执行
//   // 2. 依赖参数个数：0，只执行一次回调
//   const hasChanged = _deps ? depArray.some((dep, index) => dep !== _deps![index]) : true
//   if (hasChanged) {
//     callback()
//     _deps = depArray
//   }
// }

// 实现支持多个 useEffect
let _deps: Array<any[] | undefined> = []
let _depIndex: number = 0
function useEffect(callback: () => void, depArray?: any[]) {
  let prevDep = _deps[_depIndex]
  // console.log(_depIndex, prevDep)

  // 第二个参数不存在，每次渲染都会执行回调
  if (!depArray) {
    callback()
    _deps[_depIndex] = depArray
    _depIndex++
    return
  }

  // 第二个参数存在
  // 1. 依赖参数个数：多个，当其中一个依赖变了才执行
  // 2. 依赖参数个数：0，只执行一次回调
  const hasChanged = prevDep ? depArray.some((dep, index) => dep !== prevDep![index]) : true
  if (hasChanged) {
    callback()
    _deps[_depIndex] = depArray
  }
  _depIndex++
}

export function render() {
  // _depIndex = 0
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  )
}

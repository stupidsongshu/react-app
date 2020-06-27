import React, { useState, useMemo } from 'react'

function Sub(props: {onClick: () => void; data: {value: number}}) {
  console.log('useMemo 子组件渲染')
  const {onClick, data} = props
  return <button onClick={onClick}>{data.value}</button>
}

export default function Counter() {
  console.log('useMemo 父组件渲染')
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const data = { value: count }

  const MemoSub = useMemo(
    () => <Sub onClick={handleClick} data={data} />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count]
  )

  return <div>
    <input type="text" value={name} onChange={e => setName(e.target.value)} />
    {/* <Sub onClick={handleClick} data={{value: count}} /> */}
    {MemoSub}
  </div>
}
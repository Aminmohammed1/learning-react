import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CodeVolution</h1>
      <Counter/>
      <Counter/>
      <LoginCard/>
    </>
  )
}

export default App

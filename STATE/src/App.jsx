import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { SimpleCounter } from './SimpleCounter'
import { PreviousStateCounter } from './PreviousStateCounter'
import { BatchingState } from './BatchingState'
import { UserProfile } from './UserProfile'
import { TodoList } from './TodoList'
import { ShoppingCart } from './ShoppingCart'
import { CounterWithReducers } from './CounterWithReducers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CodeVolution</h1>
      {/* <Counter/>
      <Counter/>
      <SimpleCounter/>
      <UserProfile/>
      <PreviousStateCounter/>
      <BatchingState/>

      <LoginCard/> */}
      {/* <TodoList/> */}

        {/* <ShoppingCart /> */}
        <CounterWithReducers/>
    </>
  )
}

export default App

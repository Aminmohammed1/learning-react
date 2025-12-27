import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Welcome} from './Welcome'
import {Button} from './Button'
import { ContactForm } from './ContactForm'
import { Hello, HelloWithOutJSX } from './Hello'
import { StyledFrom } from './StyledFrom'
import { CandidateProfile } from './CandidateProfile'
import { Product } from './Product'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      
      {/* <h1>Code evolution react crash course</h1> */}
      <Product title = "My Apple" inStock = {true} price = {1299} categories = {["electronics" , "mobile", "phones"]}/>
      <CandidateProfile/>
      <StyledFrom/>
      <ContactForm/>
      <Hello/>
      <HelloWithOutJSX/>
      <Welcome name= "Bruce" alias = "Batman"/>
      <Welcome name= "claude" alias = "Superman"/>
      <Welcome name= "Diana" alias = "Wonder Women"/>
      <Button />
    </div>
  )
}

export default App

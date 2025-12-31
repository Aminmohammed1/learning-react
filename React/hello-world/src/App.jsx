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
import { Greeting } from './Greeting'
import { CardWrapper } from './CardWrapper'
import { UserInfo } from './UserInfo'
import { UserDetails } from './UseDetails'
import { ProductList } from './ProductList'
import { NameList } from './NameList'
import { Alert } from './Alert'
import { NewButton } from './NewButton'
import { CustomButton } from './CustomButton'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <CustomButton text="Like"/>
      <CustomButton text="Subscribe"/>
      
      {/* <h1 Code evolution react crash course</h1> */}
      <Alert>Your changes have been saved!!</Alert>
      <Alert type= "error">Something went wrong!!</Alert>
      <NewButton/>
      <NameList/>
      <ProductList/>
      <UserDetails name="Bruce Wayne" isOnline={true}  hideOffline={true} isNewUser={true} isPremium={true} role="admin"/>
      <UserDetails name="Clark " isOnline={false} hideOffline={false} isNewUser={true} role="vip"/>
      <CardWrapper title = "User Profile">
        <p> Bruce Wayne </p>
        <p> Batman </p>
        <p> batman@gmail.com </p>
        <button>edit profile</button>

      </CardWrapper>

      <Greeting name = "Bruce" message='Hello bhaii'/>
      <Greeting name = 'ShaktiMan' message='Aurr bhaii'/>
      <Greeting name = 'SpiderMan' message='spider web'/>
      <Greeting message='just message'/>
      <Greeting name='just name'/>
      <Greeting/>


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

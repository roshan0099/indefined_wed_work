import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainDisplay from './components/MainDisplay'
import Story from './components/Story'
import CountDown from './components/CountDown'
import Deets from './components/Deets'
import FunctionDeets from './components/FunctionDeets'
import Invite from './components/Invite'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainDisplay></MainDisplay>
      <Story></Story>
      <CountDown></CountDown>
      <Deets></Deets>
      <FunctionDeets></FunctionDeets>
      <Invite></Invite>
      <Footer></Footer>
      
    </>
  )
}

export default App

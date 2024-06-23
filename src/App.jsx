import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainDisplay from './components/MainDisplay'
import Story from './components/Story'
import CountDown from './components/CountDown'
import Deets from './components/Deets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainDisplay></MainDisplay>
      <Story></Story>
      <CountDown></CountDown>
      <Deets></Deets>
    </>
  )
}

export default App

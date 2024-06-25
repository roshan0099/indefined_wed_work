import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/MainPage'
import Gallery from './pages/Gallery'
import {Route, Router, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
      {/* <MainPage></MainPage> */}
    </>
  )
}

export default App

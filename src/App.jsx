import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollamaDemo from "./components/ScrollDemo.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollamaDemo />
    </>
  )
}

export default App

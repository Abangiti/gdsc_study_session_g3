import { useState } from 'react'
import GroupMembersList from './groupmember'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import Hello from './Hello'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <Greeting/>
      <Hello/>
    </div>
    </>
  )
}

export default App

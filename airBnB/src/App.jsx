import { useState } from 'react'
import Nav from "./components/Nav"
import Hero from "./components/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Nav />
      <Hero />
    </div>
  )
}

export default App

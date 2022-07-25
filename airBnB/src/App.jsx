import { useState } from 'react'
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Nav />
      <Hero />
      <Card />
    </div>
  )
}

export default App

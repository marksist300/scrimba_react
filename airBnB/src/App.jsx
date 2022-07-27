import { useState } from 'react'
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
const cardOutputData = data.map(elem=> {
  return (
    <Card 
        key={elem.id}
        {...elem}
    />
  )
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Nav />
      <Hero />
      <div className='card-section'>
      {cardOutputData}
      </div>
    </div>
  )
}

export default App
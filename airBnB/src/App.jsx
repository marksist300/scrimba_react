import { useState } from 'react'
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
 console.log(data)
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Nav />
      <Hero />
      <Card 
        img="./src/assets/swimmer.png"
        rating={5}
        reviewCount={6}
        location="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App
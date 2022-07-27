import { useState } from 'react'
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
const cardOutputData = data.map(elem=> {
  return (
    <Card 
        id={elem.id}
        title={elem.title}
        description={elem.description}
        price={elem.price}
        img={elem.coverImg}
        rating={elem.stats.rating}
        reviewCount={elem.stats.reviewCount}
        location={elem.location}
        openSpots={elem.openSpots}
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
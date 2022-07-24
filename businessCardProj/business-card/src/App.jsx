import { useState } from 'react'
import About from "./components/About"
import Photo from "./components/Photo"
import Info from "./components/Info"
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Photo />
      <Info />
      <Buttons />
      <About />
      <Footer />
    </div>
  )
}

export default App

import react from 'react'
import reactLogo from "../assets/reactLogo.svg"
export default function Nav () {
return  (
    <nav className='nav-bar'>
        <img className='react-logo' src={reactLogo} alt="React logo" />
        <h2 className='nav-title'>ReactFacts</h2>
        <h3 className='project-num'>React Course - Project 1</h3>
    </nav>
)
}
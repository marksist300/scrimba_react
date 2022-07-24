import React from "react"
import heroPhotos from "../assets/heroPhotos.png"

export default function Hero() {
    return (
        <section className="hero-section">
            <img className="hero-images" src={heroPhotos} alt="Photos of people doing various activities" />
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}
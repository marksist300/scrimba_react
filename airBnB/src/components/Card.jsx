import React from "react";
import star from "../assets/star.svg";
import swimCard from "../assets/swimmer.png"

export default function Card () {
    return (
        <div className="card-block">
            <a href="#"><img className="card-img" src={swimCard} alt="Picture of USA Swimming athlete Katie Zaferes posing after a race in her swim gear" /> <span className="on-card-sales-status">SOLD OUT</span></a>
            <div className="exp-rating">
                <img src={star} alt="Red star to show the rating of this experience"/>
                <span className="exp-review-rating" >5.0</span>
                <span className="exp-review-amount"> (6) •</span>
                <span className="exp-review-locale">USA</span>
            </div>
            <h4 className="exp-card-tagline">Life lessons with Katie Zaferes</h4>
            <span className="exp-card-price-section"><strong>From <span className="exp-card-price-span">$136</span></strong> / person</span>
        </div>
    )
}
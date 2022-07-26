import React from "react";
import star from "../assets/star.svg";

export default function Card (props) {

    const {img, rating, reviewCount, location, title, price} = props;
    return (
        <div className="card-block">
            <a href="#"><img className="card-img" src={img} alt="Picture of USA Swimming athlete Katie Zaferes posing after a race in her swim gear" /> <span className="on-card-sales-status">SOLD OUT</span></a>
            <div className="exp-rating">
                <img src={star} alt="Red star to show the rating of this experience"/>
                <span className="exp-review-rating" >{rating}</span>
                <span className="exp-review-amount"> ({reviewCount}) • </span>
                <span className="exp-review-locale">{location}</span>
            </div>
            <h4 className="exp-card-tagline">{title}</h4>
            <span className="exp-card-price-section"><strong>From <span className="exp-card-price-span">${price}</span></strong> / person</span>
        </div>
    )
}
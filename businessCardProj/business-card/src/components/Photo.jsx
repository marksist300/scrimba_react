import React from "react";
import photo from "../assets/portrait.jpeg";

export default function Portrait(){
    return (
        <img className="myPhoto" src={photo} alt="picture of me taken in the sunshine with a tree behind in Cinque Terre" />
    )
}
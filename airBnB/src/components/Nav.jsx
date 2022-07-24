import React from "react";
import aBnBLogo from "../assets/airBnBLogo.svg"

export default function Nav(){
    return (
        <header>
            <nav>
                <a href="#"><img className="nav-logo" src={aBnBLogo} alt="air BnB logo and Name" /></a>
            </nav>
        </header>
    )
}
import React from "react"
import linkedin from "../assets/linkedin.svg"
import email from "../assets/mail.svg"

export default function Button () {
    return (
        <div className="buttons-sections">
            <button className="email-btn"><img src={email}/> Email</button>
            <button className="linkedin-btn"><img src={linkedin}/> LinkedIn</button>
        </div>
    )
}
import React from "react"
import facebookLogo from "../assets/facebookLogo.svg"
import twitterLogo from "../assets/twitterLogo.svg"
import instagramLogo from "../assets/instagramLogo.svg"
import githubLogo from "../assets/githubLogo.svg"

export default function Footer () {
    return (
        <footer>
            <ul className="footer-links-list">
                <li><a href="#"><img src={twitterLogo} alt="Twitter bird logo link" /></a></li>
                <li><a href="#"><img src={facebookLogo} alt="Facebook F logo link" /></a></li>
                <li><a href="#"><img src={instagramLogo} alt="Instagram camera logo link" /></a></li>
                <li><a href="#"><img src={githubLogo} alt="github character logo link" /></a></li>
            </ul>
        </footer>
    )
}
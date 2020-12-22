import React from 'react'
import NavLogoImg from '../assets/nav_logo.png'

class NavLogo extends React.Component {
    render() {
        return (
            <div className="nav_logo">
                <a href="/">
                    <img className="word_logo" src={NavLogoImg} alt="EngineSpace Logo"/>
                </a>
            </div>
        )
    }
}

export default NavLogo
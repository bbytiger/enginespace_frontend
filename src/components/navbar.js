import React from 'react'
import NavLogo from '../assets/nav_logo.png'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav_logo"><a href="/">
            <img className="word_logo" src={NavLogo} alt="EngineSpace Logo"/>
          </a></div>
        <div className="link_container">
          <a href="/about" onClick={() => {
            console.log("clicked!")
          }} className="top_nav"><span>About</span></a>
          <a href="/products" className="top_nav">Products</a>
          <a href="/developers" className="top_nav">Developers</a>
          <a href="/company" className="top_nav">Company</a>
          <a href="/pricing" className="top_nav">Pricing</a>
          <a href="/blog" className="top_nav">Community</a>
        </div>
        {/* <div className="dashboard">
            <Button className="dashboard_button">Dashboard</Button>
        </div> */}
      </div>
    )
  }
}

export default NavBar
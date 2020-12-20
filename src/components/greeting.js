import React from 'react'
import LightLogo from '../assets/logo_light.png'
import DarkLogo from '../assets/logo_dark.png'

class Greeting extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      theme: "light"
    }
  }

  render() {
    return (
      /* a theme switcher here */
      <div className="wrapper">
        <div className="greetings">
          <div className="center_text">
            <div className="escape_layout">
              <h1 className="header">
                EngineSpace
              </h1>
              <p className="catchphrase">The smartest bots on the internet</p>
            </div>
          </div>
          <div className="logo_container">
            <img src={this.state.theme === "light" ? LightLogo : DarkLogo} alt="EngineSpace Logo"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Greeting
import React from 'react'
import { withRouter } from "react-router-dom";

// static assets
import LightLogo from '../assets/logo_light.png'
import DarkLogo from '../assets/logo_dark.png'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons';

// Project-Defined Components
import NavBar from './navbar'
import ControlPanel from './control'

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
        <NavBar />
        <div className="greetings">
          <div className="center_text">
            <div className="escape_layout">
              <h1 className="header gradient_header">
                EngineSpace
              </h1>
              <p className="catchphrase">The smartest bots on the internet</p>
            </div>
          </div>
          <div className="logo_container">
            <img src={this.state.theme === "light" ? LightLogo : DarkLogo} alt="EngineSpace Logo"/>
          </div>
        </div>
        <ControlPanel />
        <div className="learn_more down_bounce">
          <p className="learn_more_text">Take a tour</p>
          <div className="arrow" onClick={() => {
           this.props.history.push('/tour')
          }}>
            <IconContext.Provider
              value={{size: '6vmin', fontWeight: 500, padding: 0, opacity: 0.7}}
            >
              <IoIosArrowDown />
            </IconContext.Provider>
          </div>
        </div>
        <div className="registration side_bounce">
          <span className="learn_more_text side_text">Take me in!</span>
          <div className="arrow" onClick={() => {
            this.props.history.push('/registration')
          }}>
            <IconContext.Provider
              value={{size: '6vmin', fontWeight: 500, padding: 0, opacity: 0.7}}
            >
              <IoIosArrowForward />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Greeting)
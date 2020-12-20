import React from 'react'
import LightLogo from '../assets/logo_light.png'
import DarkLogo from '../assets/logo_dark.png'
import { RiSettings4Fill } from 'react-icons/ri';
import { IoSearchSharp } from 'react-icons/io5';
import { AiFillProfile } from 'react-icons/ai'
import { IconContext } from 'react-icons';
//import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';

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
        <div className="control_panel">
          <div className="control_icon">
            <IconContext.Provider
                value={{size: '2.3vmin', fontWeight: 500 }}
              >
              <AiFillProfile />
            </IconContext.Provider>
          </div>
          <div className="control_icon">
            <IconContext.Provider
                value={{size: '2.3vmin', fontWeight: 500 }}
              >
              <IoSearchSharp />
            </IconContext.Provider>
          </div>
          <div className="control_icon">
            <IconContext.Provider
              value={{size: '2.3vmin', fontWeight: 500 }}
            >
              <RiSettings4Fill />
            </IconContext.Provider>
          </div>
        </div>
        <div className="learn_more">
          {/* <FormGroup row>
          <FormControlLabel control={<Switch />}/>
          </FormGroup> */}
        </div>
      </div>
    )
  }
}

export default Greeting
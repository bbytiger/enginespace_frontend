import React from 'react'
import { withRouter } from "react-router-dom";

// user-defined components
import NavLogo from './navlogo'
import Login from './login'
import SignUp from './signup'

class Registration extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: 'login'
    }
  }

  render() {
    return (
      <div className="registration_wrapper">
        <div className="registration_streak_one" style={{backgroundSize: '600% 100%'}}>
        </div>
        <div className="registration_streak_two" style={{backgroundSize: '600% 100%'}}>
        </div>
        <div className="registration_card">
          <NavLogo />
          {this.state.selected ? <Login /> : <SignUp />}
        </div>
        <div className="terms_wrapper">
          <div className="terms">
            <span className="hover_opacity" onClick={() => {this.props.history.push('/')}}>©EngineSpace</span>
            <span>•</span>
            <span className="hover_opacity" onClick={() => {this.props.history.push('/contact')}}>Contact</span>
            <span>•</span>
            <span className="hover_opacity" onClick={() => {this.props.history.push('/terms')}}>Terms and Conditions</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Registration)
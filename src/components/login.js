import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <h1>
                    Login
                </h1>
                <div className="google_auth">
                    Login with Google
                </div>
                <div className="google_auth">
                    Login with Facebook
                </div>
            </div>
        )
    }   
}

export default Login
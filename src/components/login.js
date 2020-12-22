import React from 'react'
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import DarkLogo from '../assets/logo_dark.png'

const styles = theme => ({
    box: {
        marginTop: '2vmin',
        marginBottom: '1vmin',
        borderRadius: '10%',
    },
    margin: {
        margin: theme.spacing(1.5),
    },
    font: {
        marginTop: '0.7vmin',
    },
    root: {
        color: '#adef5d !important',
    },
    rootFocused: {
        color: '#adef5d',
        '&:focus': {
            color: '#adef5d',
        }
    },
    underlineAfter: {
        color: '#adef5d',
        '&::after': {
            borderBottom: '2px solid #adef5d',
        }
    }
})

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            showPassword: false,
        }
    }

    handleChange = (prop) => (event) => {
        this.setState({ ...this.state, [prop]: event.target.value });
    }

    handleClickShowPassword = () => {
        this.setState({ ...this.state, showPassword: !this.state.showPassword });
    };
    
    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    render() {
        const { classes } = this.props

        return (
            <div className="login">
                <div className="logo_wrapper">
                    <img src={DarkLogo} alt="Logo"/>
                </div>
                <h1>
                    Sign in to your account
                </h1>
                <FormControl className={classes.box}>
                <InputLabel htmlFor="standard-adornment-password" className={clsx(classes.root, classes.margin)}>Email Address</InputLabel>
                    <Input 
                        className={classes.font}
                        classes={{ focused: classes.rootFocused, underline: classes.underlineAfter}}
                        id="standard-basic"
                        label="Email Address"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                    />
                </FormControl>
                <FormControl className={classes.box}>
                <InputLabel htmlFor="standard-adornment-password" className={clsx(classes.root, classes.margin)}>Password</InputLabel>
                    <Input 
                        className={classes.font}
                        classes={{ focused: classes.rootFocused, underline: classes.underlineAfter}}
                        id="standard-basic"
                        label="Password"
                        value={this.state.password}
                        type={this.state.showPassword ? 'text' : 'password'}
                        onChange={this.handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                                className={classes.root}
                                aria-label="toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                            >
                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <p className="forgot_password">Forgot Password?</p>
                <Button>Continue</Button>
                <div className="login_connect">
                    <span>
                        OR
                    </span>
                </div>
                <div className="google_auth">
                    <Button>Login with Google</Button>
                </div>
                <div className="facebook_auth">
                    <Button>Login with Facebook</Button>
                </div>
            </div>
        )
    }   
}

export default withStyles(styles)(Login)
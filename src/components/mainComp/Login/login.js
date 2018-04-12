import React,{Component} from 'react'
import {BrowserRouter as Router , Route , Switch, Link} from 'react-router-dom'
import {FlatButton,Paper,Menu,MenuItem,AppBar,Divider,RaisedButton,TextField} from 'material-ui/';
import './login.scss'

class  Login extends Component  {
    
    render() {

        return (
        <div className='container'>

        <div className='mainContent'>
        <Paper className='paper'>
        <h2>Login</h2>
        <hr/>
        <TextField
            
            floatingLabelText= "Email"
            type="email"
            onChange={this.props.handelInputChange}
            name="email"
            fullWidth={true}
            errorText ={this.props.error}
            />
        <br />
        <TextField
            
            floatingLabelText="Password"
            type="password"
            name ="password"
            onChange={this.props.handelInputChange}
            fullWidth={true}
            errorText ={this.props.error}
        />
        <br/>
        <br/>
        
        <RaisedButton className='btu1' label="Login" onClick={this.props.loginButton} primary={true} />
        <Link to={`/newUser`}><RaisedButton  label="Go to New User" primary={true} /></Link>

        </Paper>
        </div>
        </div>
        )
    }

} 

export default Login
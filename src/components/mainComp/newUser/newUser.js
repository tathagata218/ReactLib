import React,{Component} from 'react'
import {BrowserRouter as Router , Route , Switch, Link} from 'react-router-dom'
import {FlatButton,Paper,Menu,MenuItem,AppBar,Divider,RaisedButton,TextField} from 'material-ui/';
import {Button,ButtonToolbar,Grid,Row,Col} from 'react-bootstrap/lib';
import './newUser.scss'


class NewUser extends Component {
    
    
    
    render() {
    return(


        <div className='container'>

        <div className='mainContent'>
        
        <Paper className='paper'>
        <Grid fluid={true}>


        <Row>
        
        <h2>New User</h2>
        <hr/>
        <Col xs={12} lg={6}>
        <h4>Your Information</h4>
        <hr/>
        <TextField
            floatingLabelText= "Your First Name"
            fullWidth={true}
            name ="userFirstName"
            onChange={this.props.handelInputChange}
        />
        <br />
        <TextField
            floatingLabelText= "Your Last Name"
            fullWidth={true}
            name ="userLastName"
            onChange={this.props.handelInputChange}
        />
        </Col>
        
        <Col xs={12} lg={6}>
        <h4>Your Wife's Information</h4>
        <hr />
        <TextField
            floatingLabelText= "Your Spouce First Name"
            fullWidth={true}
            name ="userWifeFirstName"
            onChange={this.props.handelInputChange}
        />
        <br />
        <TextField
            floatingLabelText= "Your Spouce Last Name"
            fullWidth={true}
            name ="userWifeLastName"
            onChange={this.props.handelInputChange}
        />
        </Col>
        <br />
        <br/>


        </Row>
        <hr/>
        <h4>Account Informaiton</h4>
        <hr/>
        <TextField
            
            floatingLabelText= "Email"
            fullWidth={true}
            name ="userEmailCreate"
            onChange={this.props.handelInputChange}
            type="email"
            errorText={this.props.error}
        />
        <br />
        <TextField
            
            floatingLabelText="Password"
            fullWidth={true}
            name ="userCreatePass"
            onChange={this.props.handelInputChange}
            type="password"
            errorText={this.props.passerror}
        />
        <br/>
        <TextField
            
            floatingLabelText="Retype Password"
            fullWidth={true}
            name ="userCreatePassCheck"
            onChange={this.props.handelInputChange}
            type="password"
            errorText={this.props.passerror}
            
        />
        <br/>
        <br/>
        <RaisedButton className='btu1' label="Create Me"  onClick={this.props.newUserButton} primary={true} />
        <Link to={`/user`}><RaisedButton label="Return To Login" primary={true} /></Link>




        </Grid>
        </Paper>
        </div>
        </div>
    )

}
} 

export default NewUser
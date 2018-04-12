import React, {Component} from 'react'
//import {Link} from 'react-router'
import './admin.scss'
import APIAdmin from '../../utils/APIAdmin'
import LibRules from '../../components/mainComp/LibRules/libRules'
import {BrowserRouter as Router , Route , Switch, Link} from 'react-router-dom'
import {Button,ButtonToolbar,Grid,Row,Col} from 'react-bootstrap/lib';
import {FlatButton,Paper,Menu,MenuItem,AppBar,Divider,RaisedButton} from 'material-ui/';

const simpStyle = {
    topMarign : {
        margin:"16px 0 16px 0",
        padding : "15px"
    },
    button : {
        margin : "12px 12px 12px 0"
        
    },
    paper: {
        display: 'inline-block',
    
        margin: '16px 60px 16px 0',
      },
      link : {
        textDecoration: "none"
      }
}
class Admin extends Component {
    state = {
        adminName :{
            firstName:"Admin",
            lastName: "Test"
        },
        butClick:"",
        allBook:[],
        allDvds: []
    }

    componentDidMount(){

    APIAdmin.getAllBooksAdmin().then((data)=>{
        this.setState({
            allBook: data.data
        })
    }).catch((err)=>{
        console.log(err);
    })

    APIAdmin.getAlldvdAdmin().then((data)=>{
        this.setState({
            allDvds:data.data
        })
    }).catch((err)=>{
        console.log(err)
    })

    }



    renderItems() {
        if(this.state.butClick === "previewBooks"){

        }
        else if (this.state.butClick === "previewDVDs"){

        }
        else if (this.state.butClick === "updateBook"){

        }
        else if ( this.state.butClick === "updateDVD"){

        }
        else if (this.state.butClick === "updateBook"){

        }
        else if (this.state.butClick === "newBook"){}

        else if(this.state.butClick === "newDVD"){
            
        }
    }
    

    previewBooks () {
        console.log('This will render all items')
    }   

    previewDvds () {

    }

    addBooks () {

    }

    addDVD () {

    }

    editBook () {

    }

    editDVD () {

    }


    render () {
        
    return(
        <Router>
        
        
            
        <Grid fluid={true}>
            <Row >
                        <Col lg={3} md={3} sm={2} xs={1}>

                            <Paper style={simpStyle.paper} >  
                                <Menu maxHeight={700} width={250} >
                                <MenuItem onClick={this.previewBooks}  primaryText="Preview Books"  /> 
                                <MenuItem  onClick={this.previewDvds}  primaryText="Preview DVDs"  />
                                <Link style={simpStyle.link} to={`${this.props.match.url}/librulesEdit`} ><MenuItem primaryText="Edit Library Rules"  /></Link>
                                <Divider />
                                <MenuItem onClick={this.addBooks} primaryText="Add New Book"  />
                                <MenuItem onClick={this.addDVD} primaryText="Add New DVD "  />
                                <Divider />
                                <MenuItem onClick={this.editBook} primaryText="Edit Book"  />
                                <MenuItem onClick={this.editDVD} primaryText="Edit DVD"  />
                                <MenuItem onClick={this.previewUsers} primaryText="Preview Users"  />
                                </Menu>
                            </Paper> 
                    
                        
                        
                        </Col>

                        <Col lg={8}  md={8} sm={9} xs={3}>
                                <Row>    
                                        <Paper style={simpStyle.topMarign}>
                                        <h2>{`Name : ${this.state.adminName.firstName} ${this.state.adminName.lastName}`}</h2>
                                        <hr/>
                                        {this.renderItems()}
                                        
                                        </Paper>

                                </Row>
                                <Row>
                                        <RaisedButton label="Add items" primary={true} style={simpStyle.button}/>
                                        <RaisedButton label="Remove Item" secondary={true} style={simpStyle.button}/>
                                </Row>   
                        </Col>
  
            </Row>
        </Grid>
                
        
</Router>
    )


    }



}

export default Admin
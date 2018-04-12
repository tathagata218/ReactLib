import React, {Component} from  'react'
import './userPage.scss'
import {BrowserRouter as Router , Route , Switch,Link} from 'react-router-dom'
import APIClient from '../../utils/APIClient'
import APIAdmin from '../../utils/APIAdmin'
import LibRules from '../../components/mainComp/LibRules/libRules'
import BookWrap from '../../components/mainComp/bookWrapper/BookWrapper'
import DvdWrap from '../../components/mainComp/dvdWrapper/DvdWrapper'
import PreBookDvd from '../../components/mainComp/previewBookDvd/PreBookDvd'
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



class User extends Component {

    state = {
        libRulesBtuClick :  false,
        userData :{},
        allBooks : [],
        allDVDs :[],
        btnClick:"",
            
       }

    componentWillMount () {
        APIClient.getAllBooks().then((data)=>{
            this.setState({
                allBooks : data.data,
                
            })
        }).then(()=>{
            
            console.log('I have received all books');
            console.log(this.state);
        })

        APIClient.getAllDvd().then((data)=>{
            this.setState({
                allDVDs : data.data,
                
            })
        }).then(()=>{
            console.log('I have received all the Dvds');
            console.log(this.state);
        })


    }

    previewBooks = () =>{
        this.setState({
            btnClick:"previewBooks"
        });

    }
    
    previewDvds = () => {
        this.setState({
            btnClick:"previewDVDs"
        });

        this.render();
        console.log(this.state);
        
        
    }

    libRules = () => {
        this.setState({
            btnClick : "LibRules"
        });
        this.render();
        console.log(this.state);
    }

    updateAccount = () => {
        this.setState({
            btnClick : "udateAccount"
        })
        this.render()
    }

    deleteAccount = () => {
        this.setState({
            btnClick : "deleteAccount"
        })
        this.render()
    }

    myBookDvd = () => {
        this.setState({
            btnClick : "mubook"
        })
    }
    


    allRenderParts = () => {
       
  
        if( this.state.btnClick === "previewBooks" ){
         
              return(
                  <div>
                  <h3>These are all the Books</h3>
                  <BookWrap addbook={this.addBook} loginid={this.props.userId} book={this.state.allBooks} />
                  </div>
              )
          
        }
        else if (this.state.btnClick === "previewDVDs" ){
          
              return(
                <div>
                <h3>These are all the Dvds</h3>
                <DvdWrap adddvd={this.adddvd} loginid={this.props.userId} dvd={this.state.allDVDs} />
                </div>
              )
          
        }
        else if(this.state.btnClick === "LibRules"){
            return(
                <div>
                <LibRules/>
                </div>
            )
        }
        else if(this.state.btnClick === "udateAccount"){
            return(
                <div>
                <h4>This is where you will be updating informations!!!!</h4>
                </div>
            )
        }
        else if(this.state.btnClick === "deleteAccount"){
            return(
                <div>
                <h4>This is where you will delete account!!!!</h4>
                </div>
            )
        }
        else if (this.state.btnClick === 'mybook'){
            return(
                <div>
                <PreBookDvd loginid={this.props.userId}/>
                </div>
            )
        }
        else{
            return(
                <div>
                <h4>This is where all your Information will be!!!!</h4>
                </div>
            )
        }

        
    }


    addBook (i) {
        
       const sendData = {
           book : this.book[i],
           userID : this.loginid
       }
       
       console.log(i)
       console.log(this.props)
       console.log('This is a add boook click')
       
        APIClient.saveBook(sendData).catch(err=>console.log(err))
    }

    
    adddvd (i) {
    
        const sendData = {
            book : this.dvd[i],
            userID : this.loginid
        }
        
        console.log(i)
        console.log(this.props)
        console.log("This is the adddvd click")
        APIClient.saveDvd(sendData).catch(err=>console.log(err))
    }

    render () {
        //console.log(this.props)
        return(

<Router>
        
        
            
        <Grid fluid={true}>
            <Row >
                        <Col lg={3} md={3} sm={2} xs={1}>

                            <Paper style={simpStyle.paper} >  
                                <Menu maxHeight={700} width={250} >
                                <MenuItem onClick={this.previewBooks}  primaryText="Preview Books"  /> 
                                <MenuItem onClick={this.previewDvds}  primaryText="Preview DVDs"  />
                                <MenuItem onClick={this.libRules} primaryText="View Library Rules"  />
                                <Divider />
                                <MenuItem onClick={this.myBookDvd} primaryText="My Books & DVDs"  />
                                {/*<MenuItem primaryText="Return Books "  />
                                    <MenuItem primaryText="Return DVDs"  />*/}
                                <Divider />
                                <MenuItem onClick={this.updateAccount} primaryText="Update Account"  />
                                <MenuItem onClick={this.deleteAccount} primaryText="Delete Account"  />
                                </Menu>
                            </Paper> 
                    
                        
                        
                        </Col>

                        <Col lg={8}  md={8} sm={9} xs={3}>
                                <Row>    


                                        <Paper style={simpStyle.topMarign}>

                                        
                                        <h2>{`Name : ${this.props.userInfo.firstName} ${this.props.userInfo.lastName}`}</h2>
                                        <RaisedButton onClick={this.props.logout} label="logout" secondary={true}><Link to="/user"></Link></RaisedButton> 

                                        {this.allRenderParts()}
                                        
                                        <hr/>
                                        </Paper>

                                </Row>
                                
                        </Col>
  
            </Row>
        </Grid>
                
        
</Router>
        ) 





    }
}


export default User
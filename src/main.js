import React, {Component} from 'react'
import Header from './components/mainComp/heading/heading.js'
import Nav from './components/mainComp/nav/nav.js'
import {browserHistory} from 'react-router'
import {BrowserRouter as Router, Route , Switch, Redirect } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import Admin from './pages/AdminPage/adminPage'
import User from './pages/userPage/userPage'
import NewUser from './components/mainComp/newUser/newUser'
import Login from './components/mainComp/Login/login'
import APIAuth from './utils/loginAndCreate'
import './test.scss'
import tokenAuth from './utils/tokeAuth'
import jwt from 'jsonwebtoken'
import key from '../secret'
import Preloder from './components/mainComp/preloader/Preloader'

class App extends Component {
    state = {
        login: false,
        newUser : false,
        loding : true     
        

    }

    componentWillMount () {
        if(localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
          
            jwt.verify(token,key.key,(err,decoded)=>{
              if(err){
             
                  this.setState({
                      login:false,
                      loding : false 
                  })
              }
              else{
                 
                  let refreshData = {
                      refEmail : decoded.Email,
                      refName : decoded.Name
                  }
                APIAuth.loginCheck(refreshData).then((data)=>{
             
                    if(!data){
                        this.setState({
                            login : false,
                            loding : false,
                        })
                    }
                    else{
                        
                        this.setState({
                            login : true,
                            userData : data.data.user,
                            userId : data.data.id,
                            loding : false 
                        })
                    }
                })
                this.render()
            }
          })
           
        }
        else{
            this.setState({
                login : false,
                loding : false
            })
        }

        
    }



    handelInputChange = (event) =>{
        let {name, value} = event.target;

        this.setState({
            [name] : value
        })

      
    }

 
    loginClick =  () => {


        const passEmail = {
            email : this.state.email,
            password: this.state.password
        }
        

        if(this.state.email.length > 0 && this.state.password.length > 0){

        const sendData = {
            userEmail :this.state.email, 
            password  :this.state.password
        }

        APIAuth.loginCheck(sendData).then((data)=>{
            
            

            if(data.data.errormessage){
                console.log(data.data.errormessage)
                this.setState({
                    login : false,
                    loginerror : data.data.errormessage,
                    loding : false,
                    
                });
                this.render();
            }

            else{
                
                tokenAuth(data.data.token)
                
                window.localStorage.setItem('token', data.data.token)

                if(localStorage.getItem('token')){
                this.setState({
                    login : true,
                    userData : data.data.user,
                    userId : data.data.id,
                    loding : false
                    
                });
                this.render();
            }
                else{
                    this.setState({
                        login : false,
                        loding : false

                    })
                }
                
            }

        })
    }
   
    else{

        this.setState({
            loginpasserror : "These fields are empty"

        })
    }
  
    }




    newUserClick = () =>{
        
        if(this.state.userCreatePass === this.state.userCreatePassCheck && this.state.userCreatePass.length >= 8 && this.state.userCreatePassCheck.length >=8 )
        {
            const newUserInfo = {
            userFirstName: this.state.userFirstName,
            userLastName :  this.state.userLastName,
            userWifeFirstName: this.state.userWifeFirstName,
            userWifeLastName : this.state.userWifeLastName,
            userEmail : this.state.userEmailCreate,
            password : this.state.userCreatePass

            }

         APIAuth.newUserAdd(newUserInfo).then((data)=>{
             if(!data.data.error){
                if( !window.localStorage.getItem('token') && !window.localStorage) {
                    tokenAuth(data.data.token)
                
                window.localStorage.setItem('token', data.data.token)
                
            
                this.setState({

                    newUser : true,
                    login : true,
                    user : data.data.user,
                    userId : data.data.id,
                });            
            
            }
            
                this.render();
            
            }
            else{
                this.setState({
                    newUser: false,
                    login:false,
                    error : data.data.error
                })
            }


             
         })   
        
        }
        else{
            this.setState({
                newUser: false,
                login:false,
                passError : "Password Must Match & be more than 8 charecters long"
            })
        }
    }

    logout = () => {
        console.log('in the logout')
        console.log(window.localStorage);
        if(window.localStorage){
            localStorage.clear()
            window.location.reload()
        }
        else{
            window.location.reload()
        }
    }


    render () {
        
        if(this.state.loding){
            return(
                <div>
                <Preloder/>
                </div>
            )
        }
        
        else if(!this.state.loding){
        return(
            
            <Router  >

           
            <div>
            
                <Nav/>
            <Switch>
                <Route exact path='/' component ={MainPage} />
                <Route exact path='/admin' component = {Admin} />
                
                {/*<Route  path='/user' component = {User} />*/}
                
                <Route path ='/user' render ={() => this.state.login ? <User
                    userInfo = {this.state.userData}
                    userId = {this.state.userId} 
                    logout = {this.logout}
                    
                    />: <Login
                    handelInputChange = {this.handelInputChange}
                    loginButton={this.loginClick}
                    error={this.state.loginerror}
                    />}/>
                <Route path ='/newUser' render ={() => this.state.newUser ? <Redirect to ="/user"/>: <NewUser
                    passerror={this.state.passError}
                    error={this.state.error}
                    newUserButton={this.newUserClick}
                    handelInputChange = {this.handelInputChange}
                    />} />
                </Switch>
               
               
            </div>
                
            </Router>
            
            
            
            
        )
    }
  
       
    }
}


export default App
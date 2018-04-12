import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import './nav.scss'

const Nav = () => {
    
    return(
        
    <div>
        <nav >
        <ul>   
        <li className="nav-item"><Link className="navlinkstyle" to="/">Home </Link></li>
        <li className="nav-item"><Link className="navlinkstyle" to="/admin">Admin </Link></li>
        <li className="nav-item"><Link className="navlinkstyle" to="/user">Users</Link></li>
        
        
        </ul>
        </nav>
     </div>
    
      
    )

    }

export default Nav
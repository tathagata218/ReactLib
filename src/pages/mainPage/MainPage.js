import React, {Component} from 'react'
import {Link} from 'react-router'
import './MainPage.scss'
import background from '../../images/pic1.jpg'

const sectionStyle = {
    backgroundImage : `url(${background})`,
  
}

class Main extends Component {
    state = {

    }
    render () {
    return(
        <div>
        <section style={sectionStyle} className="mainSection">
        
        <div className='mainInfo'>
            <div className='content'>
                <h1>This is wehere the title of the page will go</h1>
                <hr/>
                <p>
                    This is for some description
                </p>

                
            </div>
            </div>
        
        </section>

        <footer>
        <h3>This will be a footer and its content</h3>
        </footer>
        </div>
        
    )


    }



}

export default Main

import React from 'react'
import {FlatButton,Paper,Menu,MenuItem,FlotingActionButton,AppBar,Divider,RaisedButton,TextField} from 'material-ui/';
import {Button,ButtonToolbar,Grid,Row,Col} from 'react-bootstrap/lib';
import './button.scss';

const paperStyle = {
   paper :{ width:"250px",
            height:"150px",
            padding: "20px",
            margin: "15px"
        }
    }

const BookWrap = (props) =>{
    console.log(props);
    let mainObj = props;
    

        return (
            <div>
            <Grid fluid={true}>
            <Row >
        

            {props.book.map((data,i)=>{
                
                return (
                    <Col xs={4} md={4}>
                <Paper style={paperStyle.paper}>
        
            
            
                <Row>
                <Col xs={9} md={9}>
               <h4>{data.title}</h4>
               <p>Author Name : <span>{data.author.firstName}</span> <span>{data.author.lastName}</span></p>
               </Col> 
               
               
              
            <Col xs={3} md={3}>
              <button className="button" key={i} style={paperStyle.button} onClick={()=>{props.addbook(i)}}>+</button>
              </Col>
              </Row>              
                       
            
            
        
        
                
                </Paper>
                </Col>
                )


            })}
            
            </Row>
            </Grid>
            </div>
            
            )




    
    
}

export default BookWrap;
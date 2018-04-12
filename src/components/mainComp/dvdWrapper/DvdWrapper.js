import React from 'react'
import {FlatButton,Paper,Menu,MenuItem,AppBar,Divider,RaisedButton,TextField} from 'material-ui/';
import {Button,ButtonToolbar,Grid,Row,Col} from 'react-bootstrap/lib';
import './button.scss'
const paperStyle = {
    width:"250px",
            height:"200px",
            padding: "20px",
            margin: "15px"

}

const DvdWrap = (props) =>{
    console.log(props );
    let mainObj = props;
    

    return (
        <div>
        <Grid fluid={true}>
        <Row >
    

        {props.dvd.map((data,i)=>{
            
            return (
                <Col xs={4} md={4}>
            <Paper style={paperStyle}>
    
        
        
            <Row>
            <Col xs={9} md={9}>
           <h4>{data.title}</h4>
           <p>Direction : {data.direction}</p>
           <p>Lead : {data.leads}</p>
           </Col> 
           
           
          
        <Col xs={3} md={3}>
          <button className="button" key={i}  onClick={()=>{props.adddvd(i)}}>+</button>
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

export default DvdWrap;
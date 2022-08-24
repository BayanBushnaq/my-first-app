import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';


class Child extends React.Component{

    constructor(props) {
        super(props); 
        this.state = {
            numOfLikes :"💓"
        }
    }

    incrementNumOfLikes = () => {
        this.setState({
            numOfLikes : this.state.numOfLikes + "💓"
           
        })
    }
    render(){
        return (
          <>
          
            <Card  style={{ width: '18rem' }} >
              <Card.Img variant="top" src={this.props.img} onClick={this.incrementNumOfLikes}/>
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>{this.props.des}</Card.Text>
                <Card.Text>
                  Favorite  : {this.state.numOfLikes}
                </Card.Text>
              </Card.Body>
            </Card>
            </>
          );

        }
        
    }


export default Child;
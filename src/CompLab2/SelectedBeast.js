import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Data from '../Data'




class selectedBeast extends React.Component{

constructor(props){
     super(props);
     this.state={
      seltBeast : {},
      show:false
   

     }

     myFunction=(title)=>{
      const selectedBeast=Data.find(beast => beast.title === title);
      this.setState({
        show:true ,
        seltBeast:selectedBeast
      
      })
     }

     handleClose=()=>{
      this.setState({
        show:false
      })
     }
    }
    render(){
        return (
        <>
          
      
      <Modal show={this.props.showModel} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.selectedBeast.image_url}></img>
          <p>{this.props.selectBeast.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>)
        
    
    }

}

export default selectedBeast ;
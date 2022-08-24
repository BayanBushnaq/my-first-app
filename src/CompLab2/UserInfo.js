import React from 'react'
import Form from 'react-bootstrap/Form'
import Data from '../Data'


class UserInfo extends React.Component{
 constructor(props){
  super(props);
  this.state={
      numberofhorns:''
  }
 }

  handelClick=()=>{
    e.perventDefault();
      this.setState({
        numberofhorns: e.target.horns.value
      })
  }

    render(){
        return(
        <>
        <Form onClick={this.handelClick}>
        <Form.Group className="mb-3">
        <h1>Welcome To My First React App</h1>
          <Form.Label >Filter</Form.Label>
          <Form.Select abled id="horns">
            <option>Please Choose Number Of Horns</option>
            <option>One</option>
            <option>Two</option>
            <option>More..</option>
          </Form.Select>
        </Form.Group>
        </Form>
      </>)
    }
}

export default UserInfo;
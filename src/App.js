import React from 'react';
import Parent from './CompLab2/Parent';
import Data from '../src/Data'





class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //    seltBeast : {},
  //    show:false
  

  //   }

  //   myFunction=(title)=>{
  //    const selectedBeast=Data.find(beast => beast.title === title);
  //    this.setState({
  //      show:true ,
  //      seltBeast:selectedBeast
     
  //    })
  //   }

  //   handleClose=()=>{
  //    this.setState({
  //      show:false
  //    })
  //   }
  //  }
 

  render(){
    return (
    
      <div className="cards">
        <Parent/>
        {/* <selectedBeast showMode={this.state.show} handleClose={this.handleClose} /> */}
    
      </div>

    )
  }
}

export default App;






import React from 'react';
import Parent from './CompLab2/Parent';
import Data from '../src/Data'
import UserInfo from './CompLab2/UserInfo';




class App extends React.Component{

 
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






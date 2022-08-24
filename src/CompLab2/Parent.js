import React from 'react';
import Data from '../Data'
import Child from '../CompLab2/Child'
import UserInfo from '../CompLab2/UserInfo'

// import SelectedBeast from '../CompLab2/SelectedBeast'




   
let card = 
Data.map((val)=>{
    return(
<Child title={val.title} img={val.image_url} des={val.description}/>)
});


class Parent extends React.Component{



    render(){
        return (
            <>
           <div>{card}</div>
           <UserInfo/>
        </>
        )
        
        
    }
}

export default Parent;


// <h3>{val.title}</h3>
// <h3><img src={val.image_url}/></h3>;
// <h3>{val.description}</h3>
// <h3>Favoriets:</h3>



// onClick={()=>{this.props.myFunction(this.props.title)}}
{/* <SelectedBeast showMode={this.state.show} handleClose={this.handleClose} /> */}

    // constructor(props){
    //     super(props);
    //     this.state={
    //      seltBeast : {},
    //      show:false
      
    
    //     }
    
    //     myFunction=(title)=>{
    //      const selectedBeast=Data.find(beast => beast.title === title);
    //      this.setState({
    //        show:true ,
    //        seltBeast:selectedBeast
         
    //      })
    //     }
    
    //     handleClose=()=>{
    //      this.setState({
    //        show:false
    //      })
    //     }
    //    }
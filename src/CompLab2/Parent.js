import React from 'react';
import Data from '../Data'
import Child from '../CompLab2/Child'


let card=
Data.map((val)=>{
         return(
    <Child title={val.title} img={val.image_url} des={val.description}/>)
    });

class Parent extends React.Component{

    render(){
        
        return (card) 
    }
}

export default Parent;


// <h3>{val.title}</h3>
// <h3><img src={val.image_url}/></h3>;
// <h3>{val.description}</h3>
// <h3>Favoriets:</h3>
import React from 'react';
import HornedBeast from './HornedBeast';
import imagess from './REACT.png'

class Main extends React.Component{
    render(){
        return (
            <div>
                <HornedBeast title='React' img='https://live.staticflickr.com/4083/4971891274_2091d5c8a2_c.jpg' description='how to create component with props'/>
                
            </div>
        )
    }
}

export default Main;
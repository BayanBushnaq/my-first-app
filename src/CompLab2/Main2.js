import React from 'react'
import UserInfo from './UserInfo'
import Data from '../Data'

class Main2 extends React.constructor{
    render(){
        if (this.props.UserInfo.numberofhorns === "1"){
            const arr = this.props.Data.filter(element => element.horns === 1);
            return arr.map((element) => (
                <UserInfo
                  key={element._id}
                  id={element._id}
                  title={element.title}
                  img={element.image_url}
                  horns={element.horns}
                  description={element.description}
                  showModal={this.props.showModal}
                />
              ));
        } else if (this.props.UserInfo.numberofhorns === "2"){
            const arr = this.props.Data.filter(element => element.horns === 2);
            return arr.map((element) => (
                <UserInfo
                  key={element._id}
                  id={element._id}
                  title={element.title}
                  img={element.image_url}
                  horns={element.horns}
                  description={element.description}
                  showModal={this.props.showModal}
                />
              ));
        
        } else if(this.props.UserInfo.numberofhorns === "3") {
            const arr = this.props.Data.filter(element => element.horns === 3);
            return arr.map((element) => (
                <UserInfo
                  key={element._id}
                  id={element._id}
                  title={element.title}
                  img={element.image_url}
                  horns={element.horns}
                  description={element.description}
                  showModal={this.props.showModal}
                />
              ));
        } else if(this.props.UserInfo.numberofhorns === "100") {
            const arr = this.props.Data.filter(element => element.horns === 100);
            return arr.map((element) => (
                <UserInfo
                  key={element._id}
                  id={element._id}
                  title={element.title}
                  img={element.image_url}
                  horns={element.horns}
                  description={element.description}
                  showModal={this.props.showModal}
                />
              ));
        } else {
            return this.props.Data.map((element) => (
                <UserInfo
                  key={element._id}
                  id={element._id}
                  title={element.title}
                  img={element.image_url}
                  horns={element.horns}
                  description={element.description}
                  showModal={this.props.showModal}
                />
              ));
        }
      }
    }



export default Main2


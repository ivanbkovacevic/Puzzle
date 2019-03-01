import React, { Component } from 'react';
import './App.scss';
import Container from './components/Container'
import OriginalImage from './components/OriginalImage'

class App extends Component {
state={
  myPicture:null
}

handleChange=(event)=> {
  const name = event.target.name;
 this.setState({[name]:event.target.files[0].name});
 
}
  handleSubmit=(event)=> {
    event.preventDefault();
  
    console.log(this.state.myPicture)
   
  }
  render() {
    return (
      <div className="main-container">
             <div className="my-form">
                <form  onSubmit={this.handleSubmit}>
                        Select a file: <input onChange={this.handleChange} type="file"  name="myPicture"></input>
                      
                        <input type="submit"></input>
                </form>
                </div>
                <div className="app__container">   
                <Container />
                </div>
          
          <OriginalImage/>     
      </div>
     
    );
  }
}

export default App;

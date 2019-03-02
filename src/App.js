import React, { Component } from 'react';
import './App.scss';
import Container from './components/Container'
import OriginalImage from './components/OriginalImage'

class App extends Component {
state={
  myPicture:"http://labelme.csail.mit.edu/Release3.0/Images/users/lito/whatever/birsd.jpg"
}

handleChange=(event)=> {
  const name = event.target.name;
 this.setState({[name]:event.target.value});
 
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
                        Paste image URL: <input onChange={this.handleChange} type="text"  
                        placeholder="Paste the image URL address" size="35" name="myPicture"></input>
                </form>
                </div>
                <div className="app__container">   
                <Container myPicture={this.state.myPicture}/>
                </div>
          <OriginalImage myPicture={this.state.myPicture}/>     
      </div>
     
    );
  }
}

export default App;

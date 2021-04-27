import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'
import { CropImage} from './components/Utility'
import OriginalImage from './components/OriginalImage'
import startImage from './kerber.png'
import logoKerber from './logo-kerber.png'

class App extends Component {
state={
  myPicture:startImage

}


// onSelectFile = (e) => {
//   if (e.target.files && e.target.files.length > 0) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => {
//       this.setState({ myPicture: reader.result });
//     });
//     reader.readAsDataURL(e.target.files[0]);
//   }
// }

// onSelectURL=(e)=>{
//   console.log(e.target.value)
//   this.setState({myPicture:e.target.value});
// }

  render() {
   
    return (
      <div className="wraper">
         <div className="div-logo-kerber">
          <img className="img-logo-kerber" src={logoKerber} alt=''></img>
    </div>
    <a className="headline" target="_blank" href="https://www.facebook.com/KerberGames" alt=" ">Kerber Games</a>
      <div className="main-container">
             {/* <div className="my-form">
             <input type="file" onChange={this.onSelectFile} />
           
              <input onChange={this.onSelectURL} type="text"  
                        placeholder="OR paste the image URL address" size="30" name="myPicture"></input>
              </div> */}
                <Container myPicture={this.state.myPicture}/>   
               {/* <OriginalImage myPicture={this.state.myPicture}/>     */}
              
      </div>
      </div>

    );
  }
}

export default App;

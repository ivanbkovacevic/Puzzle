import React, { Component } from 'react';
import './App.scss';
import Container from './components/Container'
import OriginalImage from './components/OriginalImage'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';

class App extends Component {
state={
  myPicture:"http://labelme.csail.mit.edu/Release3.0/Images/users/lito/whatever/birsd.jpg",
  
  src: null,
  crop: {
    x: 0,
    y: 0,
    aspect: 1,
    width: 50,
  },
}

// handleInputChange=(event)=> {
//  this.setState({myPicture:URL.createObjectURL(event.target.files[0])});
// }

// handleImageLoaded=(image)=>{
 
// }

// handleOnCropChange=(crop)=>{
//   this.setState({ crop });
// }

// handleOnCropComplete=(crop,pixelCrop)=>{

//     const canvas = this.refs.canvas;
//     canvas.width = pixelCrop.width;
//     canvas.height = pixelCrop.height;
//     const ctx = canvas.getContext('2d');
   
//     ctx.drawImage(
//       this.state.myPicture,
//       pixelCrop.x,
//       pixelCrop.y,
//       pixelCrop.width,
//       pixelCrop.height,
//       0,
//       0,
//       pixelCrop.width,
//       pixelCrop.height
//     );
   
//     return new Promise((resolve, reject) => {
//       canvas.toBlob(blob => {
//         blob.name = fileName;
//         resolve(blob);
//       }, 'image/jpeg');
//     });
//   }
   
//   async test() {
//     const croppedImg = await getCroppedImg(image, pixelCrop, returnedFileName);
//   }
onSelectFile = (e) => {
  if (e.target.files && e.target.files.length > 0) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.setState({ src: reader.result });
    });
    reader.readAsDataURL(e.target.files[0]);
  }


 
}


getCroppedImg(image, pixelCrop, fileName) {
  console.log('getCroppedImg', { image, pixelCrop, fileName });
  const canvas = document.createElement('canvas');
  canvas.width =400;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
   400,
   400,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  );

}


  render() {
    const { croppedImageUrl } = this.state;
    return (
      <div className="main-container">
             <div className="my-form">
             <input type="file" onChange={this.onSelectFile} />
                </div>
                <Container myPicture={this.state.croppedImageUrl}/>   
               <OriginalImage myPicture={this.state.myPicture}/>    
      
        
      </div>
    );
  }
}

export default App;

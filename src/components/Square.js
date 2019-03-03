import React from 'react';
import slika from '../assets/mishuka.jpg';

export default (props) => {
  let picture=props.myPicture;
  let klassa;
  
  if(picture){
    klassa="square show"
  }else{
    klassa="square"
  }
  console.log(picture);

  let move = {
    transition:'all 0.5s',
    transform:`translate(${props.classMove.x}px,${props.classMove.y}px)`,
   
   };
  return (
            <div style={move} className={`${props.classContainer} ${klassa}`} 
                 onClick={props.onSquareClick}>    
               <img className={props.class} src={picture} alt=''></img>
                </div>
  )
}



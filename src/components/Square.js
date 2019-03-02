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
  return (
            <div className={klassa} onClick={props.onSquareClick}>    
               <img className={props.class} src={picture} alt=''></img>
                </div>
  )
}

import React from 'react';
import slika from '../assets/HubKujna.jpg'

export default (props) => {
  return (
  
            <div className="square" onClick={props.onSquareClick}>
              
               <img className={props.class} src={slika} alt='mishuka'></img>
                </div>
   
  
  )
}

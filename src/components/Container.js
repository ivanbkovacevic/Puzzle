import React, { Component } from 'react';
import Square from './Square';
import {PlayAudio,GameWin} from './Utility';
import audio from "../assets/SlidingCroped.mp3";

class Container extends Component {
    state={
        puzzle:[],
        myPicture:null,
        emptyPoz:{x:3,y:3},
        
    }

    componentDidMount() {
      let {puzzle}=this.state;
      puzzle=[...puzzle];
      
      let classArr=[];
      let classContainerArr=[];
      let classArrResorted=[];
      let classContainerArrTrimed=[];
      let square={};
      let clas;
      let clasContainer;

      for(let i=1; i<4;i++){
        for(let k=1; k<4; k++){
            clas=`square-${i}${k}`;
            classArr.push(clas);
            clasContainer=`container-square-${i}${k}`;
            classContainerArr.push(clasContainer);
        }}
        classArr.pop();
        classArr.sort(()=>Math.random()-0.5);
     
        let indx=0;

      for(let i=1; i<4;i++){
        for(let k=1; k<4; k++){
            square={id:indx,x:k,y:i,class:classArr[indx],
            classContainer:classContainerArr[indx],
            classMove:{x:0,y:0},
            empty:{x:k,y:i},
            sound:true
        };
            puzzle.push(square);    
            indx++;
        }
      }
    
      puzzle.pop()
      square={id:8, x:3, y:3, class:'square-empty',
      classContainer:'container-square-empty',
      classMove:{x:0,y:0},
      empty:{x:null,y:null},
      sound:false
    };
      puzzle.push(square);

      for(let i in classArr){
          let temp= classArr[i].slice(7,9);      
        classArrResorted.push(temp);
        classArrResorted.sort();
      }
      classArrResorted.push('33');

      for(let i in classContainerArr){
          let temp= classContainerArr[i].slice(17,19);      
          classContainerArrTrimed.push(temp);
          classContainerArrTrimed.sort();
      }
  
      this.setState({puzzle,classArr,classContainerArrTrimed,classArrResorted})
    }

    onSquareClick=(i)=>{
        let {puzzle,emptyPoz,classContainerArrTrimed,classArrResorted}=this.state;
        puzzle=[...puzzle];
        let emptySquare;
        let squareClicked=puzzle[i];
        let gameStatus;
        
        for(let i in puzzle){
            if(puzzle[i].x===emptyPoz.x && puzzle[i].y===emptyPoz.y ){  
                emptySquare=puzzle[i];//looking for empty square
              
                 
                if(Math.abs((squareClicked.x - emptySquare.x))===1 && squareClicked.y === emptySquare.y){
                //  moving on X axis
             
                    if(emptySquare.x-squareClicked.x===1){//checking is it moving right
                        squareClicked.classMove.x+=133;
                        emptySquare.classMove.x-=133;
                        squareClicked.x++;
                        emptySquare.x--;  
                        emptyPoz.x--;
                        emptySquare.sound=false;   
                        this.setState({puzzle,emptyPoz})         
                     } 
                     else if(emptySquare.x-squareClicked.x===-1){//checking is it moving left
                        squareClicked.classMove.x-=133;
                        emptySquare.classMove.x+=133;
                        squareClicked.x--;
                        emptySquare.x++;  
                        emptyPoz.x++; 
                        emptySquare.sound=false;   
                        this.setState({puzzle,emptyPoz})             
                     }
                     
                }
                if(Math.abs((squareClicked.y - emptySquare.y))===1 && squareClicked.x === emptySquare.x){
                 //moving on Y axis
                 if(emptySquare.y-squareClicked.y===1){//checking is it moving up
                    squareClicked.classMove.y+=133;
                    emptySquare.classMove.y-=133;
                    squareClicked.y++;
                    emptySquare.y--;  
                    emptyPoz.y--;   
                    emptySquare.sound=false;   
                    this.setState({puzzle,emptyPoz})         
                 } 
                 else if(emptySquare.y-squareClicked.y===-1){//checking is it moving down
                    squareClicked.classMove.y-=133;
                    emptySquare.classMove.y+=133;
                    squareClicked.y--;
                    emptySquare.y++;  
                    emptyPoz.y++; 
                    emptySquare.sound=false;   
                    this.setState({puzzle,emptyPoz})             
                 }
                }
            } 
              
                if(squareClicked.sound){ // play audio when moving
                    let myAudio = this.refs.myAudio;
                    PlayAudio(myAudio);
                }

              gameStatus=GameWin(classContainerArrTrimed,classArrResorted);//checking is it all solved
           
             console.log(gameStatus);

        }
    
          this.setState({puzzle,emptyPoz,gameStatus})
          console.log(emptySquare,emptyPoz,squareClicked)
    }
    
    render() {
   
        let squareMaped=this.state.puzzle.map((sq,i)=>{
            return(
            <Square onSquareClick={()=>this.onSquareClick(i)}
             key={i}
             x={sq.x} y={sq.y} 
             class={sq.class}
             classContainer={sq.classContainer}
             classMove={sq.classMove}
             myPicture={this.props.myPicture}
             gameStatus={this.state.gameStatus}
            />)
        })
        return (
            <div className="app-container">   
              {squareMaped}
              <audio ref={"myAudio"}><source src={audio} type="audio/mp3"></source></audio>   
           </div>
        );
    }
}

export default Container;
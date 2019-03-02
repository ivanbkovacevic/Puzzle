import React, { Component } from 'react';
import Square from './Square';

class Container extends Component {
    state={
        puzzle:[],
        myPicture:null,
        emptyPoz:{x:3,y:3}
    }

    componentDidMount() {
      let {puzzle}=this.state;
      puzzle=[...puzzle];
      let classArr=[];
      let classContainerArr=[];
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
            square={id:i,x:k,y:i,class:classArr[indx],
            classContainer:classContainerArr[indx],
            classMove:{x:0,y:0},
            empty:false
        };
            puzzle.push(square);    
            indx++;
        }
      }
    
      puzzle.pop()
      square={id:9, x:3, y:3, class:'square-empty',
      classContainer:'container-square-empty',
      classMove:{x:0,y:0},
      empty:true
    };
      puzzle.push(square);
     
      this.setState({puzzle})
    }

    onSquareClick=(i)=>{
        let {puzzle,emptyPoz}=this.state;
        puzzle=[...puzzle];
        let emptySquare;
        let squareClicked=puzzle[i];
     
        for(let i in puzzle){
            if(puzzle[i].x===emptyPoz.x && puzzle[i].y===emptyPoz.y ){  
                emptySquare=puzzle[i];
                emptySquare.empty=true;
                     
                if(Math.abs((squareClicked.x - emptySquare.x))===1 && squareClicked.y === emptySquare.y){
             
                    if(emptySquare.x-squareClicked.x===1){
                        puzzle[i].classMove.x=133;
                        emptySquare.classMove.x=-133;
                        puzzle[i].x=puzzle[i].x+1;
                        emptySquare.x=emptySquare.x-1;   
                        emptyPoz.x=emptyPoz.x-1;             
                     } 
                      if(emptySquare.x-squareClicked.x===-1){
                        puzzle[i].classMove.x=-133;
                        emptySquare.classMove.x=133;
                        puzzle[i].x=puzzle[i].x-1;
                        emptySquare.x= emptySquare.x+1;
                        emptyPoz.x=emptyPoz.x+1;
                    }
                }
                if(Math.abs((squareClicked.y - emptySquare.y))===1 && squareClicked.x === emptySquare.x){
                
                    if(emptySquare.y-squareClicked.y===1){
                        puzzle[i].classMove.y=133;
                        emptySquare.classMove.y=-133;
                        puzzle[i].y=puzzle[i].y-1;
                        emptySquare.y=emptySquare.y+1;
                        emptyPoz.y=emptyPoz.y+1;
                        
                     }  if(emptySquare.y-squareClicked.y===-1){
                        puzzle[i].classMove.y=-133;
                        emptySquare.classMove.y=133;
                        puzzle[i].y=puzzle[i].y+1;
                        emptySquare.y=emptySquare.y-1;  
                        emptyPoz.y=emptyPoz.y-1;     
                    }
                }
            } 
        }
        console.log(emptySquare)
       
          this.setState({puzzle,emptyPoz})
    }
    
    render() {
        console.log(this.state.myPicture)
        let squareMaped=this.state.puzzle.map((sq,i)=>{
            return(
            <Square onSquareClick={()=>this.onSquareClick(i)}
             x={sq.x} y={sq.y} 
             class={sq.class}
             classContainer={sq.classContainer}
             classMove={sq.classMove}
             myPicture={this.props.myPicture}
            />)
        })
        return (
            <div className="app-container">   
              {squareMaped}
           </div>
          
              
          
        );
    }
}

export default Container;
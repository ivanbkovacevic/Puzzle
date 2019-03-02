import React, { Component } from 'react';
import Square from './Square';

class Container extends Component {
    state={
        puzzle:[],
        myPicture:null
    }

    componentDidMount() {
      let {puzzle}=this.state;
      puzzle=[...puzzle];
      let classArr=[];
      let square={};
      let clas;

      for(let i=1; i<4;i++){
        for(let k=1; k<4; k++){
            clas=`square-${i}${k}`;
            classArr.push(clas);
        }}
        classArr.pop();
        classArr.sort(()=>Math.random()-0.5);
        let indx=0;

      for(let i=1; i<4;i++){
        for(let k=1; k<4; k++){
            square={id:i,x:k,y:i,class:classArr[indx]};
            puzzle.push(square);    
            indx++;
        }
      }
    
      puzzle.pop()
      square={id:9, x:3, y:3, class:'square-empty'};
      puzzle.push(square);
     
      this.setState({puzzle})
    }

   
    onSquareClick=(i)=>{
        let {puzzle}=this.state;
        puzzle=[...puzzle];
        let classClicked=puzzle[i].class;
        let emptySquare;
        let squareClicked=puzzle[i];
          
          for(let j in puzzle){
            if(puzzle[j].class==='square-empty'){
                emptySquare=puzzle[j];
            if(Math.abs((squareClicked.x - emptySquare.x))===1 && squareClicked.y === emptySquare.y){
                puzzle[i].class=emptySquare.class;
                emptySquare.class=classClicked; 
            }
            if(Math.abs((squareClicked.y - emptySquare.y))===1 && squareClicked.x === emptySquare.x){
                puzzle[i].class=emptySquare.class;
                emptySquare.class=classClicked; 
            }
        }
           }
          
        console.log(emptySquare)
       
          this.setState({puzzle})
    }
    
    render() {
        console.log(this.state.myPicture)
        let squareMaped=this.state.puzzle.map((sq,i)=>{
            return(
            <Square onSquareClick={()=>this.onSquareClick(i)}
             x={sq.x} y={sq.y} 
             class={sq.class}
             myPicture={this.props.myPicture}
            />)
        })
        return (
           <div>  {squareMaped}</div>
              
          
        );
    }
}

export default Container;
export function PlayAudio(myAudio) {
    myAudio.play();
  }

  export function GameWin(classContainerArrTrimed,classArrResorted) {
    let gameStatus=false;
    for(let i;i=0;i++){
       if(classContainerArrTrimed[i]===classArrResorted[i]){
        gameStatus=true;
       }
    }
   return gameStatus

  }
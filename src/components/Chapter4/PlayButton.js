import {useState} from 'react';
import './PlayButton.css';

function PlayButton(){
    const[playing,setPlaying]=useState(false);
    function onPause(){
        console.log('The Video has paused');
    }

    function onPlay(){
        console.log('The Video is Playing');
    }
    

    function handleClick(e){
       e.stopPropagation();
       if(playing){
        onPause();
       }else{

        onPlay();}

    setPlaying(~playing);
    }
    return(
        <>
        <button onClick={handleClick}>{playing?'Pause⏹️':'Play▶️'}</button>
        </>
    )
}


export default PlayButton;
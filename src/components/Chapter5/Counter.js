import {useState} from 'react';


export default function Counter(){
    // let number=0;
    const [number,setNumber]=useState(0);

    function handleClick(e){
        e.stopPropagation();
        // number++;
        setNumber(number+1);
        console.log(number);
    }

    return(
        <>
        <h1>{number}</h1>
        <button onClick={handleClick}>Increment</button>
        </>
    );

}
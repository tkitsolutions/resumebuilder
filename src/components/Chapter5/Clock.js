import './Clock.css';
import {useEffect, useState} from 'react';


export default function Clock(){
    // let date=new Date();
    const [date,setDate]=useState(new Date());
    const time= date.toLocaleTimeString();

    function refreshClock(){
        setDate(new Date());
    }

    useEffect(()=>{
        const timerId=setInterval(refreshClock,1000);

    },[])
    return(
<>
        <div className='clockTime'>{   
            // date.toLocaleTimeString()
            time
        }   NOW</div>

</>

        );

}
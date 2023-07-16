import { useState } from 'react';
import './ProfileImage.css';
export default function ProfileImage({piclink}){

    console.log('the image link is ', piclink)
    return(
        <div className="Profile-image">
            
            <img src={piclink} className={piclink?'':'image-not-found'}/>
        
        </div>

    );

}
import { useEffect, useState } from 'react';
import './ProfilePicture.css';


const ProfilePicture = ({sendPhotolink}) => {

    const[photolink,setPhotolink]=useState('');
    
    function selectionHandler(event){
        setPhotolink(URL.createObjectURL(event.target.files[0]));   
    }

useEffect(
    ()=>{
        // sendPhotolink(photolink);
        {(photolink)?sendPhotolink(photolink):sendPhotolink('')}
        console.log('the image link sent ', photolink)
    },[photolink]
        
)

    return ( 
        
             <div className='imageContainer'>
                    {(photolink)?<img src={photolink} />:<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEJosoXVPeLxAU8zgc5r6FXOtGPAUpDefDB2vW7k&s' />}
                    
                    <input type='file' name="ProfilePic" id='ProfilePic' onChange={selectionHandler}/>
                    <label htmlFor='ProfilePic' id='ProfilePicBtn' onChange={selectionHandler}>Add Photo </label>
            </div>

     );
}
 
export default ProfilePicture;


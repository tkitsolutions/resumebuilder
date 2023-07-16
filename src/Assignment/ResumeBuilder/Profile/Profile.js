import MyInput from '../../../components/MyInput';
import Mytextarea from '../../../components/Mytextarea';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import './Profile.css';
import React, { useEffect } from 'react';
import { BsArrowDownSquare } from 'react-icons/bs';
import { useState } from 'react';
import DropDownField from '../../../components/dropdownfield';

const Profile = ({sendPhotolink,sendResumeIntroduction}) => {
    const intialState='';
    const [showMenu,setShowMenu]=useState(false);
    const [fname,setFname]=useState(intialState);
    const [lname,setLname]=useState(intialState);
    const [objective,setObjective]=useState(intialState);

    const handleFname=(e)=>{
        setFname(e.target.value);
    }
    const handleLname=(e)=>{
        setLname(e.target.value);
    }
    const handleObjective=(e)=>{
        setObjective(e.target.value);
    }

    const handledropdown=()=>{
        setShowMenu(~showMenu);
    }

    useEffect(
        ()=>{
                sendResumeIntroduction(fname,lname,objective);
        },
        [fname,lname,objective]
    )
    
    const profileSection=<div className='profile-details'>
                            <div className='profile_info'>
                                <MyInput type='text' name='first_name' placeholder='First Name'  onChange={handleFname}/>
                                <MyInput type='text' name='last_name' placeholder='Last Name'  onChange={handleLname}/>
                                <Mytextarea type='textarea' name='Objective' placeholder='Write Objective here ...' id="Objective"  onChange={handleObjective}/>              
                            </div>
                            <ProfilePicture sendPhotolink={sendPhotolink} className='profilePic'/>
                            </div>
    return ( 
        <div className='profile-container'>
                <DropDownField secHeading='Profile' secDetails={profileSection}/>
        </div>
     );
}
 
export default Profile;
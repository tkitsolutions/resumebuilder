import { useEffect, useState } from 'react';
import MyInput from '../../../components/MyInput';
import ProfilePicture from '../Profile/ProfilePicture/ProfilePicture';
import './PersonalInfo.css';
import { BsArrowDownSquare } from 'react-icons/bs';
import DropDownField from '../../../components/dropdownfield';

export default function PersonalInfo({sendContact}){

        const [contact,setContact]=useState({});
        const [showMenu,setShowMenu]=useState(false);

        const handleContactForm=(e)=>{
            
            if (e.target.value==='')
            {
            delete contact[e.target.name]
            setContact({...contact})
            }

            else {
            setContact({...contact,[e.target.name]:e.target.value})   
            }    
        }

        const handledropdown=()=>{
            setShowMenu(~showMenu);
        }
    

    useEffect(
        ()=>{
            sendContact(contact)
        }
    )
    
    const pinfosection=     <div className='PersonalDetail-Form--container'>
                            <div className='PersonalDetail-Form'>                              
                                <MyInput type='email' name='email' placeholder='Email*' onChange={handleContactForm}/>
                                <MyInput type='text' name='phone' placeholder='Phone Number*' onChange={handleContactForm}/>
                                <MyInput type='text' name='address' placeholder='Address*' onChange={handleContactForm}/>
                                <MyInput type='text' name='website' placeholder='Your Website*' onChange={handleContactForm}/>
                                <MyInput type='text' name='gitHub' placeholder='GitHub' onChange={handleContactForm}/>
                                <MyInput type='text' name='linkedin' placeholder='LinkedIn' onChange={handleContactForm}/>
                                <MyInput type='text' name='facebook' placeholder='Facebook*' onChange={handleContactForm}/>
                                <MyInput type='text' name='twitter' placeholder='Twitter*' onChange={handleContactForm}/>
                            </div>
                            </div>      

    return(
            <div className='PersonalInfo-container'>
                    <DropDownField secHeading='Personel Information' secDetails={pinfosection}/>
            </div>


    );
}
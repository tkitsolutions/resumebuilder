import { useEffect, useState } from 'react';
import MyInput from '../../../components/MyInput';
import './ReferenceInfo.css';
import DropDownField from '../../../components/dropdownfield';
import MyButton from '../../../components/MyButton';
import {BsCheckLg} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';

export default function ReferenceInfo({sendReferenceInfo}){

    const [organization,setOrg]=useState('');
    const [position,setPosition]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [name,setName]=useState('');

    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handlePosition=(e)=>{
        setPosition(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePhone=(e)=>{
        setPhone(e.target.value)
    }
    const handleOrg=(e)=>{
        setOrg(e.target.value)
    }

    useEffect(
        ()=>{
            sendReferenceInfo(name,position,organization,phone,email)
        }
    )

    const refSection=   <div className='ReferenceInfo-Form'>

    <div>
    <MyInput type='text' name='Name' placeholder='Name'  onChange={handleName}/>
    <MyInput type='text' name='Organization' placeholder='Organization*'  onChange={handleOrg}/>
    <MyInput type='text' name='Position' placeholder='Position' onChange={handlePosition}/>
    <MyInput type='text' name='Phone' placeholder='Phone' onChange={handlePhone}/>  
    <MyInput type='text' name='Email' placeholder='Email' onChange={handleEmail}/>  
    <div className='LS-Forms-btns'>
                    <MyButton isSecondary='True'><RiDeleteBin6Line/></MyButton>
                    <MyButton name='Done'><BsCheckLg/></MyButton>  
                </div> 
        </div>    
        <MyButton name='Add Reference' isSecondary='True'><AiOutlinePlus/></MyButton> 
                     
</div>
    return(
            <div className='ReferenceInfo-container'>
                     <DropDownField secDetails={refSection}  secHeading="Reference Details" />        
            </div>


    );
}
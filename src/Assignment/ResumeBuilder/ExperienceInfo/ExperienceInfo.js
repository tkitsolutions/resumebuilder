import { useEffect, useState } from 'react';
import MyInput from '../../../components/MyInput';
import './ExperienceInfo.css';
import DropDownField from '../../../components/dropdownfield';
import MyButton from '../../../components/MyButton';
import {BsCheckLg} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';

export default function ExperienceInfo({sendExperienceInfo}){

    const [institute,setInstitute]=useState('');
    const [position,setPosition]=useState('');
    const [datestart,setdatestart]=useState('');
    const [dateto,setdateto]=useState('');
    const [description,setDescription]=useState('');

    const handleInstitute=(e)=>{
        setInstitute(e.target.value)
    }
    const handlePosition=(e)=>{
        setPosition(e.target.value)
    }
    const handleDatestart=(e)=>{
        setdatestart(e.target.value)
    }
    const handleDateto=(e)=>{
        setdateto(e.target.value)
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value)
    }

    useEffect(
        ()=>{
            sendExperienceInfo(position,institute,description,datestart,dateto)
        }
    )

    const expsection= <div className='ExperienceInfo-Form'>
        <div>
            <MyInput type='text' name='Institute' placeholder='Institute/Organization*'  onChange={handleInstitute}/>
            <MyInput type='text' name='Position' placeholder='Position' onChange={handlePosition}/>
            <MyInput type='text' name='Date-start' placeholder='Date-start*' onChange={handleDatestart}/>  
            <MyInput type='text' name='Date-to' placeholder='Date-to*' onChange={handleDateto}/>  
            <MyInput type='text' name='Description' placeholder='Description*' onChange={handleDescription}/>  
                <div className='LS-Forms-btns'>
                    <MyButton isSecondary='True'><RiDeleteBin6Line/></MyButton>
                    <MyButton name='Done'><BsCheckLg/></MyButton>  
                </div> 
        </div>    
        <MyButton name='Add Experience' isSecondary='True'><AiOutlinePlus/></MyButton>

    </div>
    return(
            <div className='ExperienceInfo-container'>
                       <DropDownField secDetails={expsection} secHeading="Experience Details"/> 
            </div>


    );
}
import { useEffect, useState } from 'react';
import MyInput from '../../../components/MyInput';
import './EducationInfo.css';
import DropDownField from '../../../components/dropdownfield';
import Mytextarea from '../../../components/Mytextarea';
import MyButton from '../../../components/MyButton';
import {BsCheckLg} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';
import AddedItem from '../../../components/AddedItem';


export default function EducationInfo({sendEducation}){
     
    const [education,setEducation]=useState([]);
    const [institute,setInstitute]=useState();
    const [year,setYear]=useState();
    const [degree,setDegree]=useState();
    const [isadded,setIsAdded]=useState(false);

   
    const handleInstitute=(e)=>{
        setInstitute(e.target.value);
    }
    const handleYear=(e)=>{
        setYear(e.target.value);
    }
    const handleDegree=(e)=>{
        setDegree(e.target.value);
    }

    const handleEducationForm=()=>{
        setEducation([...education,{year:year,degree:degree,uni:institute}])
        setIsAdded(~isadded);
    }

    const handleEdit=()=>{
        setIsAdded(~isadded);
    }

    useEffect(
        ()=>{
            sendEducation(education)
        }
    )
    
    const eduSection=<div className='EducationInfo-Form'>
                       {isadded?'': <div className='education_university'>
                        <MyInput type='text' name='University' placeholder='College/University*' onChange={handleInstitute}/>
                        <MyInput type='date' name='Date of Completion' placeholder='Date of Completion' onChange={handleYear}/>
                        <MyInput type='text' name='Degree Name' placeholder='Degree Name' onChange={handleDegree}/>
                        <Mytextarea type='description' name='Description' placeholder='Describe Education' id="Description"  />              
                            <div className='EducationInfo-Form--buttons'>
                            <MyButton isSecondary='True'><RiDeleteBin6Line/></MyButton>
                            <MyButton name='Done' handleClick={handleEducationForm}><BsCheckLg/></MyButton>  
                            </div>  
                        </div>}   
                        {isadded?<AddedItem title={degree} handleClick={handleEdit}/>:''}
                        <MyButton name='Add Education' isSecondary='True' ><AiOutlinePlus/></MyButton>
                    </div>

                             
    return(
            <div className='EducationInfo-container'>   
            <DropDownField secHeading='Education Details' secDetails={eduSection}/>                        
            </div>


    );
}
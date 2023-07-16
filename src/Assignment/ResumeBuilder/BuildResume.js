
import { useState } from 'react';
import './BuildResume.css';
import EducationInfo from './EducationInfo/EducationInfo';
import ExperienceInfo from './ExperienceInfo/ExperienceInfo';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Profile from './Profile/Profile';
import Resume from '../ResumeTempelate/Resume';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import test from '../../data/images.jpeg';
import Language_Skill from './Language&Skills/Skill';
import ReferenceInfo from './ReferenceInfo/ReferenceInfo';
import {FiDownload} from 'react-icons/fi';
import MyButton from '../../components/MyButton';
import Language from './Language&Skills/Language';

export default function BuildResume(){

    const totalpages=3;
    const initialPicLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEJosoXVPeLxAU8zgc5r6FXOtGPAUpDefDB2vW7k&s';
    const [piclink,setPicLink]=useState('');
    const [contact,setContact]=useState({});
    const [education,setEducation]=useState([]);
    const [expertise,setExpertise]=useState([]);
    const [language,setLanguage]=useState([]);
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [objective,setObjective]=useState('');
    const [dateto,setdateto]=useState('');
    const [datestart,setdatestart]=useState('');
    const [organization,setOrganization]=useState('');
    const [position,setPosition]=useState('');
    const [description,setDescription]=useState('');
    const [reforganization,setOrg]=useState('');
    const [refposition,setrefPosition]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [name,setName]=useState('');



    const sendPiclink=(Piclink)=>{
        setPicLink(Piclink);
    }
    const sendContact=(Contact)=>{
           setContact(Contact); 
    }
    const sendEducation=(Education)=>{
        setEducation(Education); 
    }
    const sendExpertise=(Expertise)=>{
        setExpertise(Expertise); 
    }
    const sendLanguage=(Language)=>{
        setLanguage(Language); 
    }

    const sendResumeIntroduction=(Fname,Lname,Objective)=>{
        setFname(Fname);
        setLname(Lname);
        setObjective(Objective);
    }

    const sendExperienceInfo=(position,organization,description,datestart,dateto)=>{
            setPosition(position);
            setOrganization(organization);
            setDescription(description);
            setdatestart(datestart);
            setdateto(dateto);

    }

    const sendReferenceInfo=(name,refposition,reforganization,phone,email)=>{
        setName(name);
        setrefPosition(refposition);
        setOrg(reforganization);
        setPhone(phone);
        setEmail(email);

}
 

    // const [btnClass,setBtnClass]=useState('btn-active');
    // const [btnClass2,setBtnClass2]=useState('btn-disable');
    // const[page,setPage]=useState();
    // const[pageNo,setPageNo]=useState(1);


    //  let Contact={
    //     Phone:'+923478769897', Email:'mtouseef897@gmail.com',Address:'Flat 206, Gillani Heights, Golra Shareef, Islamabad'
    // }

    // let Education=[
        // {
        //     year:'2008', Degree:"BSc. Computer Engg", University:"U.E.T Taxila"
        // },
   
    //     {
    //         year:'2009', Degree:"BSc. Electrical Engg", University:"U.E.T Taxila"
    //     }
    // ]

    // let Expertise=['UI/UX','GraphicDesign','Process Flows','Talking']


    // let Language=['English', 'Spanish']
    // const handleNext=()=>{
    //     setPage(
    //         (pageNo==1)?<><EducationInfo/><ExperienceInfo/></>:
    //         (pageNo==2) ?<Resume piclink={piclink}/> :
    //         page
    //     );

    //     setPageNo((pageNo<totalpages)?pageNo+1:pageNo);
    //     setBtnClass((pageNo>=totalpages-1)?'btn-disable':'btn-active');
    //     setBtnClass2('btn-active');
        
        
    // }
    // const handleBack=()=>{
    //     setPage(
    //         (pageNo==2)?<><Profile/><PersonalInfo/></>:
    //         (pageNo==3)?<><EducationInfo/><ExperienceInfo/></>:
    //         page
    //     );

    //     setPageNo((pageNo>1)?pageNo-1:pageNo);
    //     setBtnClass('btn-active');
    //     setBtnClass2((pageNo<=2)?'btn-disable':'btn-active');
        
    // }
   // pageInitialState=<><Profile sendPhotolink={sendPhotolink}/>  <PersonalInfo/>   </>
 
 
   const downloadPdf=()=>{
        const capture=document.querySelector('.resume-page>:first-child');
        html2canvas(capture,{scale:10}).then(
            (canvas)=>{
                const imgData=canvas.toDataURL('img/png');
                const doc=new jsPDF('p','px','a4');
                const compwidth=doc.internal.pageSize.getWidth();
                const compHEIGHT=doc.internal.pageSize.getHeight();
                console.log(compwidth);
                console.log(compHEIGHT);
                doc.addImage(imgData,'PNG',0,0,compwidth,compHEIGHT);
                doc.save('resume.pdf');
            }
            )
    }



    


 

    return(
        <div className="resumeBuilder-Container">
            <div className="titleBar">
                Resume Builder
                <MyButton name='Download' handleClick={downloadPdf}><FiDownload/></MyButton>
                {/* <button className="dbtn">
                    <FiDownload className='logo'/>
                    Download
                    </button> */}
                </div>
            
            <div className='resumebuilder-windows'>
                <div className='resumeBuilder-Components'>
                
                    <Profile sendPhotolink={sendPiclink}  sendResumeIntroduction={sendResumeIntroduction}/>
                    <PersonalInfo sendContact={sendContact}/>
                    <EducationInfo sendEducation={sendEducation}/>
                    <Language_Skill sendExpertise={sendExpertise} sendLanguage={sendLanguage}/>
                    <Language sendExpertise={sendExpertise} sendLanguage={sendLanguage}/>
                    <ExperienceInfo sendExperienceInfo={sendExperienceInfo}/>
                    <ReferenceInfo sendReferenceInfo={sendReferenceInfo}/>

                </div>
                <div className='resume-page'>
                        <Resume  piclink={piclink}  
                                    Contact={contact}  
                                    Education={education} 
                                    Expertise={expertise} 
                                    Language={language} 
                                    fname={fname} 
                                    lname={lname} 
                                    objective={objective}
                                    datestart={datestart} 
                                    dateto={dateto} 
                                    organization={organization} 
                                    position={position} 
                                    description={description}
                                    name={name}
                                    refposition={refposition}
                                    reforganization={reforganization}
                                    phone={phone}
                                    email={email}
                                    
                                    />

                </div>
            </div>
        </div>
    );
}
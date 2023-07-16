import MainSection from "./MainSection/Mainsection";
import Sidebar from "./SideBar/Sidebar";
import './Resume.css';

export default function Resume({piclink,Contact,Education,Expertise,Language,fname,lname,objective,datestart,dateto,organization,position,description,name,refposition,reforganization,phone,email}){
    return(
        <div className="resume-container">
             <Sidebar piclink={piclink}  Contact={Contact}   Education={Education} Expertise={Expertise} Language={Language} />
             <MainSection fname={fname}
                          lname={lname}
                          objective={objective}  
                          dateto={dateto} 
                          datestart={datestart} 
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

    );
}
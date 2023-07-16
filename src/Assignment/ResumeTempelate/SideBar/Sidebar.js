import ProfileDetails from "./ProfileDetails/ProfileDetails";
import ProfileImage from "./ProfileImage/ProfileImage";
import './Sidebar.css';
// export default function Sidebar({piclink,Contact,Education,Expertise,Language}){
export default function Sidebar({piclink,Contact,Education,Expertise,Language}){


    return(
        <div className="sidebar-container">   
         <ProfileImage piclink={piclink}/>
         <ProfileDetails Contact={Contact} Education={Education} Expertise={Expertise} Language={Language}/>
         {/* <ProfileDetails Contact={Contact} Education={Education} Expertise={Expertise} Language={Language}/> */}
        </div>
    );
}
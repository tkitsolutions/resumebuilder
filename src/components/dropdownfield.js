import { PiArrowSquareDownLight,PiArrowSquareUpLight } from 'react-icons/pi';
import {useState} from 'react';
import './dropdownfield.css';

const DropDownField = ({secHeading,secDetails}) => {

    const [showMenu,setShowMenu]=useState(false);
    const handledropdown=()=>{
        setShowMenu(~showMenu);
    }

    return ( 
    <>
                <div className={showMenu?'DropDownHeading ddactive':'DropDownHeading '}>
                <div>{secHeading}</div>
                {showMenu?<PiArrowSquareUpLight className='dropdownbtn' onClick={handledropdown}/>:<PiArrowSquareDownLight className='dropdownbtn' onClick={handledropdown}/>}
                </div>
                {
                    showMenu?secDetails:''
                }    
   </>
   );
}
 
export default DropDownField;
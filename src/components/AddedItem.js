import './AddedItem.css';
import {BsPencilSquare} from 'react-icons/bs';
import MyButton from './MyButton';


const AddedItem = ({title,handleClick}) => {
    return ( 
        <div className='addedItem'>
        <div>{title}</div>
        <MyButton isSecondary='True' handleClick={handleClick}><BsPencilSquare/></MyButton>
        </div>  
     );
}
 
export default AddedItem;
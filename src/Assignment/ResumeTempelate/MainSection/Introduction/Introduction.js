import './Introduction.css';
export default function Introduction({fname,lname,objective}){
    return(
        <div className="intro-container">
        <p className="Intro-name"> {fname} <span className='Intro-name--last'>{lname}</span></p>
        {/* <p className="Intro-post"> Junior Research Officer </p> */}
        <p className="Intro-description">{objective}
         </p>
        </div>
    );
}
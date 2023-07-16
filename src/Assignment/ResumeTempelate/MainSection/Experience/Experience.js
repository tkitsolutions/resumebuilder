import './Experience.css';
export default function Experience({dateto,datestart,organization,position,description}){
    return(
        <div className="experience-container">
        <p className="experience-date">{datestart}-{dateto}</p>
        <p className="experience-company"> {organization}</p>
        <p className="experience-position"> {position} </p>
        <p className="experience-description">{description}
         </p>
        </div>
    );
}
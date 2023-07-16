import Experience from "./Experience/Experience";
import Introduction from "./Introduction/Introduction";
import './Mainsection.css';
import Reference from "./Refrences/Reference";
export default function MainSection({fname,lname,objective,dateto,datestart,organization,position,description,name,refposition,reforganization,phone,email}){
    return(
        <div className="mainsection-container">
             <Introduction  fname={fname} lname={lname} objective={objective}/>
             
             {(dateto||datestart||organization||position||description)?
             <div className="experience-section">
                <p >Experience</p>
                <div className="experience-list">
                <Experience  dateto={dateto} datestart={datestart} organization={organization} position={position} description={description}/>
                </div>
             </div>:''
            }


           { (name||refposition||reforganization||phone||email)?
           <div className="reference-section">
                <p >Reference</p>
                <div className="references-list">
                <Reference 
                                                name={name}
                                                refposition={refposition}
                                                reforganization={reforganization}
                                                phone={phone}
                                                email={email}/>
                <Reference/>

                </div>
             </div>:''

             }

        </div>
       
    );
}
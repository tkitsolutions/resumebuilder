import './App.css';
import BuildResume from './Assignment/ResumeBuilder/BuildResume';

import Resume from './Assignment/ResumeTempelate/Resume';

function App() {
  return (
<div className='app-container'>
  <BuildResume/>
  {/* <Resume  piclink={piclink}  
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
                                
                                /> */}
</div>
  );
}

export default App;

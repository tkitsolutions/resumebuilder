import './ProfileDetails.css';

export default function ProfileDetails({Contact,Education,Expertise,Language}){

    // let Contact={
    //     Phone:'+923478769897', Email:'mtouseef897@gmail.com',Address:'Flat 206, Gillani Heights, Golra Shareef, Islamabad'
    // }

    // let Education=[
        // {
        //     year:'2008', Degree:"BSc. Computer Engg", University:"U.E.T Taxila"
        // },
   
        // {
        //     year:'2009', Degree:"BSc. Electrical Engg", University:"U.E.T Taxila"
        // }
    // ]

    // let Expertise=['UI/UX','GraphicDesign','Process Flows','Talking']


    // let Language=['English', 'Spanish']
    console.log('length',Education.length)
    console.log(Education)
    return(
        <div className='profileDetailsContainer'>

        <div>
           {/* <p className='profileDetails-Category'>{(Object.keys(Contact).length===0 | Object.values(Contact).length===0)?'':'Contact'}</p>
           <p className='profileDetails-Category'>{(Object.keys(Contact).length===0 | Object.values(Contact).length===0)?'':'Contact'}</p> */}

            {
               (Object.keys(Contact).length===0)?'':  <p className='profileDetails-Category'>Contact</p>
            }

            {
                Object.keys(Contact).map(
                    (x)=>{
                        return(
                            <>
                            <p className='contactType'>{Contact[x]?x:''}</p>
                            <p className='contactType-Value'>{Contact[x]}</p>
                            </>
                        );
                    }
                )
            }
        </div>
        <div>
           
            { Education.length===0?'' : <p className='profileDetails-Category'>Education</p>}

                        {
                            Education.map(
                                (x)=>{
                                    return(
                                        <p className='educationDetail-container'>
                                           { Object.keys(x).map(
                                            (y)=>{
                                                return(
                                                    <>
                                                    <p className={x==='Degree'?'education-detail':'education-detail education-detail--degree'}>{x[y]}</p>
                                                    </>
                                                );
                                            }
                                        )}
                                        </p>
                                    )
                                }
                            )
                           
                        }
        </div>                        
        <div>                       
        { Expertise.length===0?'' : <p className='profileDetails-Category'>Expertise</p>}
                                {
                                    Expertise.map(
                                        (x)=>{
                                            return(
                                                <ul className='expertiseList'>
                                                <li>{x}</li>
                                                </ul>
                                            )
                                        }
                                    )
                                
                                }
        </div> 
        <div>
        { Language.length===0?'' : <p className='profileDetails-Category'>Language</p>}
                                {
                                    Language.map(
                                        (x)=>{
                                            return(
                                                <p className='languageList'>
                                                {x}
                                                </p>
                                            )
                                        }
                                    )
                                
                                }                        

                

        </div>

        </div>
    )
}
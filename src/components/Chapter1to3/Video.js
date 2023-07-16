import './Video.css';

function Video({id=1,title,channel,views,time,verified=false}){
// let verified=true;
let channelJSX;

// if (verified){
//     channelJSX=    <div className="channel">{channel} ✅</div>
// }
// else{
//     channelJSX=    <div className="channel">{channel}</div>
// }

function handleClickEvent({title="Everythings"}){
    alert("hello" + " "+ title);
}
return(
    <>
    <div className="container">
    <div className="pic" onClick={()=>handleClickEvent({title})}>
    <img src={`https://picsum.photos/id/${id}/343/193`}/>
    </div>
    <div className="title">{title}</div>
    {/* {channelJSX} */}
    <div className="channel">{channel} {verified?'✅':'❤️'}</div>
    <div className="views">{views} views <span>.</span> {time} </div>
    </div>
    </>
)
}

export default Video;
import './VideoForm.css';
import {useState} from 'react';


const initalState={
    channel:'Har Pal Geo',time:'2 hours ago', verified:false, title:'', views:''
};
function VideoForm ({addVideos}){
    const[video,setVideo]=useState(initalState)

    function handleSubmit(e){
            e.preventDefault(); 
            addVideos(video);
            console.log(video);
            setVideo(initalState);
    }

    function handleChange(e){
        // console.log(e.target.name,e.target.value);
        setVideo({
            ...video, [e.target.name]:e.target.value
        })

       
    }
    return(

        <form>
            <input type="text" name="title" placeholder='title' onChange={handleChange} value={video.title}/>
            <input type="text" name="views" placeholder='views' onChange={handleChange}  value={video.views}/>
            <button onClick={handleSubmit}>
                Add Video
            </button>

        </form>
        

    );
}


export default VideoForm;
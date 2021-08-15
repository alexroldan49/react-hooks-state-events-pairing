import {useState} from "react"



function Video (props){
    const [showCom, setCom] = useState(true)
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    const handleDislike= ()=>{setDislike(dislike+1)}

    const handleLike= ()=> setLike(like+1);
        

    function handleToggle(){
        setCom(!showCom)
    }
    return (
    <>
        <iframe
            width="919"
            height="525"
            src="https://www.youtube.com/embed/dpw9EHDh2bM"
            frameborder="0"
            allowfullscreen
            title="Thinking in React"
        />
        <h2> {props.title} </h2>
        <div>
            <p>Views {props.views}  | Uploaded {props.upload}</p>
            <button onClick={handleLike} >{like}👍</button><button onClick={handleDislike}>{dislike}👎</button>
            <br></br>
        </div>
    </>)
}

export default Video
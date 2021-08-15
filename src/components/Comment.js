import { useState } from "react"


function Comment(props) {

const [like, setLike]= useState(0)
const [dislike, setDislike]= useState(0)

const handleLike = ()=> setLike(like+1)
const handleDislike = ()=> setDislike(dislike+1)

return(
    <li>
        <h3>{props.user}</h3>
        <p>{props.coms}</p>
        <button onClick={handleLike} >{like}👍</button><button onClick={handleDislike}>{dislike}👎</button>
    </li>
)
}



export default Comment
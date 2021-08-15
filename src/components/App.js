import video from "../data/video.js";
import Video from "./Video"
import Comment from "./Comment"
import { useState } from "react"
import SearchBar from "./SearchBar"


function App() {

  const [showCom, setCom] = useState(true)

  const handleToggle= ()=>{setCom(!showCom)}


  console.log("Here's your data:", video);

  const mappedComs = video.comments.map((com)=>{
    return <Comment key={com.id} coms={com.comment} user={com.user} />
  })
  
  return (
    <div className="App">
      <Video title={video.title} views={video.views} upload={video.createdAt} />
      <button onClick={handleToggle}>{showCom ? "Hide Comments" : "Show Comments"}</button>
      {showCom ? <SearchBar/> : null }
     <ul> {showCom ? mappedComs : null } </ul>
    </div>
  );
}

export default App;

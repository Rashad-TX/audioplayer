import { render } from "@testing-library/react";
import React from "react";
import { Playlist } from "../shared/playlist";

function DisplaySongs(){

return(
<div> 
    <div className = "title-container">
    <p className = "title">{Playlist[0].title} </p>
    <p className = "artist">{Playlist[0].artist}</p>
    </div>

  <div className = "img-container">
    <img className = "image" alt="song-cover" src = {Playlist[0].cover}></img>
  </div>
  
  <div className = "audio-container">
    <audio className = "song" src ={Playlist[0].song} controls autoPlay></audio>
    </div>

   
</div>
);
}

export default DisplaySongs;
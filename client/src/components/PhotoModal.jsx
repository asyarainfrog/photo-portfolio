import React from "react";

export default function PhotoModal({photo,onClose}) {
  return (
    <div onClick={onClose} style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.8)"}}>
      <img src={photo.imageUrl} style={{margin:"100px auto",display:"block",maxWidth:"80%"}}/>
    </div>
  );
}

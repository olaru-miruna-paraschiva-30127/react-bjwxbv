import React, { Component } from 'react';
import { render } from 'react-dom';
import {BsX} from "react-icons/bs";
import React, { useState } from "react";
import {BsX} from "react-icons/bs";

function buildFileSelector(){
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.setAttribute('multiple', 'multiple');
  return fileSelector;
}
const RenderButton = ({onClickPress}) => {
  
    return(

      <button style={{backgroundColor:'white', border:'2px solid rgb(190,190,190)',
      borderRadius:'8px',width:'100%',height:'80px',borderStyle:'dashed',color:'rgb(190,190,190)'}} onClick={onClickPress}> Drag and Drop to uploadyour videos </button>
      
    )
  }
  
 function handleFileSelect (e) {
    e.preventDefault();
    this.fileSelector.click();
  }
 let fileSelector=0;
export default function OpenOnClick() {
  const names=["Intro Video.mp4"]
   
  fileSelector = buildFileSelector();
  

  const [a, setA] = new useState(true);
  const h = () => {
    setA(!a);
   };

 
    return (
      
      <div>
      <RenderButton onClickPress={(e) => fileSelector.click()}/>
      <br/>
      <br/>
      <br/>
      <div>
      <div style={{backgroundColor:'rgb(204,204,255)', color:/*a3 ?'black':*/'rgb(153,50,204)',borderRadius:'8px',borderColor:'rgb(153,50,204)',height:'100%',width:'19%',display:'flex',padding:'3px',justifyContent:'space-between'}}>{names[0]}<button onClick={h} style={{backgroundColor:'rgb(204,204,255)',border:'1px solid rgb(204,204,255)',color:'rgb(153,50,204)',borderRadius:'12px'}}><BsX/></button></div>
      </div>
      </div>
    );
  
}



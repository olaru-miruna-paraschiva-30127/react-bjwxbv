import React from "react";
import {BsPeople} from "react-icons/bs";
import {CiMail} from "react-icons/ci";
import {TbChartCircles} from "react-icons/tb";
export default function Mentor() {
  return (
    
    <div>
      <div>
      <button style={{
       border:'1px solid white',
       borderRadius: '20px',
      backgroundImage:'',
        height:'58px',
        width:'58px',
        backgroundColor:"rgb(230,231,243)" ,
     
     }}></button></div>
     <br/>
     <div style={{display:'flex'}}>
     <div style={{backgroundColor:'white', border:'2px solid rgb(190,190,190)',
   borderRadius:'15px',width:'49%',height:'34px',display:'flex'}}>
     <button  style={{backgroundColor:'white', border:'1px solid white',borderRadius:'15px',color:'rgb(127,0,255)'}}><BsPeople/> </button> <input style={{backgroundColor:'white ', 
   borderRadius:'15px',width:'100%',height:'29px',border:'1px solid white',color:'gray',outline:'none'}} placeholder="Name"/></div>
&nbsp;&nbsp;&nbsp;


   <div style={{backgroundColor:'white', border:'2px solid rgb(190,190,190)',
   borderRadius:'15px',width:'49%',height:'34px',display:'flex'}}>
     <button  style={{backgroundColor:'white', border:'1px solid white',borderRadius:'15px',color:'rgb(127,0,255)'}}><CiMail/> </button> <input style={{backgroundColor:'white ', 
   borderRadius:'15px',width:'100%',height:'29px',border:'1px solid white',color:'gray',outline:'none'}} placeholder="Email address"/></div>
    </div>
    
    <br/>
    <div style={{backgroundColor:'white', border:'2px solid rgb(190,190,190)',
   borderRadius:'15px',width:'49%',height:'34px',display:'flex'}}>
     <button  style={{backgroundColor:'white', border:'1px solid white',borderRadius:'15px',color:'rgb(127,0,255)'}}><TbChartCircles/> </button> <input style={{backgroundColor:'white ', 
   borderRadius:'15px',width:'100%',height:'29px',border:'1px solid white',color:'gray',outline:'none'}} placeholder="LinkedIn URL (optional)"/></div>
    </div>
  );
}

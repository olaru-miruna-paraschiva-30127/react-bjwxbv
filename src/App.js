import React,{useState} from "react";
import "./style.css";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import {BsCircle} from "react-icons/bs";
import {MdPlayArrow} from "react-icons/md";
import {CiTextAlignJustify} from "react-icons/ci";
import {BsPlusSquare} from "react-icons/bs";
import SearchBar from "./searchBar";

export default function Page2() {
   let i=0;
   let k1=false;
   let k2=false;
   let k3=false;
   let k4=false;
   let k5=false;
   let k6=false;
   let k7=false;
   let k8=false;

   const [a1, sA1] = useState(true);
   const [a2, sA2] = useState(true);
   const [a3, sA3] = useState(true);
   const [a4, sA4] = useState(true);
   const [a5, sA5] = useState(true);
   const [a6, sA6] = useState(true);
   const [a7, sA7] = useState(true);
   const [a8, sA8] = useState(true);
  const h1 = () => {
    sA1(!a1);};
  
  const h2 = () => {
    sA2(!a2);
   };
  const h3 = () => {
   sA3(!a3);
  };
  const h4 = () => {
   sA4(!a4);
  };
  const h5 = () => {
   sA5(!a5);
  };
  const h6 = () => {
   sA6(!a6);
  };
  const h7 = () => {
   sA7(!a7);
  };
  const h8 = () => {
   sA8(!a8);
  };
  if(a1==false){k1=true; k2=false; k4=false; k5=false; k6=false; k3=false; k7=false; k8=false; };
  if(a2==false){k2=true; k1=false;k3=false; k4=false; k5=false; k6=false; k7=false; k8=false;};
  if(a3==false){k2=false; k1=false;k3=true; k4=false; k5=false; k6=false; k7=false; k8=false;};
  if(a4==false){k2=false; k1=false;k4=true; k3=false; k5=false; k6=false; k7=false; k8=false;};
  if(a5==false){k2=false; k1=false;k5=true; k4=false; k3=false; k6=false; k7=false; k8=false;};
  if(a6==false){k2=false; k1=false;k6=true; k4=false; k5=false; k3=false; k7=false; k8=false;};
  if(a7==false){k2=false; k1=false;k7=true; k4=false; k5=false; k6=false; k3=false; k8=false;};
  if(a8==false){k2=false; k1=false;k8=true; k4=false; k5=false; k6=false; k7=false; k3=false;};
  
  
  
 if(k1==true){i=1};
 if(k2==true){i=2} ;
 if(k3==true){i=3} ;
 if(k4==true){i=4} ;
 if(k5==true){i=5} ;
 if(k6==true){i=6} ;
 if(k7==true){i=7} ;
 if(k8==true){i=8} ;
  
  return (
    <div>
       
      <article style={{  
    width:"100%",
   height:'60px',
   boxShadow: '1px 2px 9px lightgray',
   justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse',
  
   }}>
     <a href="https://react-hnjjf3.stackblitz.io/"  style={{ backgroundColor:'white',
   border:'white',height:'20px',textDecoration: 'none'}} >
       <div style={{display:'flex',
    flex:1,
   flexdirection:'row-reverse',
   justifyContent:'space-between'}}><div style={{color:'rgb(127,0,255)'}}><AiOutlineArrowLeft/></div>&nbsp; <div>Back</div></div></a>
  <div style={{fontWeight:'bold',fontSize:"25px"}}>Add New Internship</div>
   <button style={{height:'25px',
   color:'gray',
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
   borderRadius:'8px'
  }} >
       <div style={{display:'flex',
    flex:1,
   flexdirection:'row-reverse',
   justifyContent:'space-between'}}> <div>Continue to Next Step</div>&nbsp;<div><AiOutlineArrowRight/> </div></div></button>
        </article>
       
        <div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'80px'
      }}>
 </div>
 
 <article style={{width:'100%',
 height:'50px',
 backgroundColor:'rgb(230,231,243)',
 border:'1px solid lightgray',
 justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse',
   fontSize:"13px"
}}>
<div ><BsCircle/>&nbsp;Internship Description</div>
<div style={{color:'rgb(190,190,190)'}}><BsCircle/>&nbsp;Internship Guide</div>
<div style={{color:'rgb(190,190,190)'}}><BsCircle/>&nbsp;Surveys</div>
<div style={{color:'rgb(190,190,190)'}}><BsCircle/>&nbsp;Settings</div>
</article>
<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'85px'
      }}>
 </div>
<article style={{ float: 'left', width:'45%', backgroundColor:'rgb(230,231,243)',border:'1px solid rgb(230,231,243)',height:'660px'}}>
<div style={{width:'100%'}}>
  <div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button 
onClick={h1}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==1 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   
   borderRadius:'8px',
   boxShadow: i==1?'1px 2px 9px gray':''
   }}><div>Category</div><div style={{color:i==1?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button
onClick={h2}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border: i==2 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==2?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div>Description</div><div style={{color:i==2?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button
onClick={h3}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border: i==3 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==3?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div>Location</div><div style={{color:i==3?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button 
onClick={h4}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',
   backgroundColor:'white',
   border:i==4 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==4?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div>Benefits</div><div style={{color:i==4?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button 
onClick={h5}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==5 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==5?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div>Intro Video</div><div style={{color:i==5?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>


<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>
   
<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button
onClick={h6}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==6 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==6?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div>Mentor Details</div><div style={{color:i==6?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button 
onClick={h7}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==7 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==7?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div>Recommended Roles</div><div style={{color:i==7?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button 
onClick={h8}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==8 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==8?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div>Web Links & Resources</div><div style={{color:i==8?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}>
     <button style={{width:'100%',height:'55px',
   padding:'18px',
  color:'rgb(127,0,255)',
   backgroundColor:'rgb(230,231,243)',
   border:'2px solid pink',
   borderStyle:'dashed',
   borderRadius:'8px',borderColor:'rgb(127,0,255)'}}><BsPlusSquare/>&nbsp;&nbsp;&nbsp;Add More</button></div>
   </div>
</article>
<article style={{ float: 'right', width:'55%', backgroundColor:'white',border:'1px solid red',height:'200px'}}>
<div style={{fontWeight:'bold',fontSize:"22px"}}>Category</div>




   </article>
   
    </div>
  );
}
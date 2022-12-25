import React,{useState} from "react";
import "./style.css";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import {BsCircle} from "react-icons/bs";
import {MdPlayArrow} from "react-icons/md";
import {CiTextAlignJustify} from "react-icons/ci";
import {BsPlusSquare} from "react-icons/bs";
import {BsFillPatchCheckFill} from "react-icons/bs";
import SearchBar from "./SearchBar";
import SearchBar1 from "./SearchBar1";
import Description from "./Description";
import OpenOnClick from "./OpenOnClick";
import Mentor from "./Mentor"
import Roles from "./Roles"
import Web from "./Web"
import {names} from "./SearchBar"
import TextArea from 'texarea-autosize-reactjs';
let j1=0;
   let j2=0;
   let j3=0;
   let j4=0;
   let j5=0;
   let j6=0;
   let j7=0;
   let r=0;
   let g1=0;
   let g2=0;
   let g3=0;
   let g4=0;
   let g5=0;
   let g6=0;
   let g7=0;
   let g8=0;
export default function Page2() {
   
   let i=0;
  
  let r1=1;
   let k1=false;
   let k2=false;
   let k3=false;
   let k4=false;
   let k5=false;
   let k6=false;
   let k7=false;
   let k8=false;
let text1;
const [a, sA] = useState(true);
   const [a1, sA1] = useState(true);
   const [a2, sA2] = useState(true);
   const [a3, sA3] = useState(true);
   const [a4, sA4] = useState(true);
   const [a5, sA5] = useState(true);
   const [a6, sA6] = useState(true);
   const [a7, sA7] = useState(true);
   const [a8, sA8] = useState(true);
   const h = () => {
      sA(!a);};
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
  
  
  
 if(k1==true){i=1; text1="Category";r=r+1;g1=g1+1;if(r>1){r=1;}};
 if(k2==true){i=2;j1=1; text1="Description";r=r+1;g2=g2+1; if(r>2){r=2;}} ;
 if(k3==true){i=3; j2=2; text1="Location";r=r+1 ;g3=g3+1;if(r>3){r=3;}};
 if(k4==true){i=4;j3=3; r=r+1; text1="Benefits";g4=g4+1;if(r>4){r=4;}} ;
 if(k5==true){i=5; j4=4;r=r+1;text1="Intro Video";g5=g5+1;if(r>5){r=5;}} ;
 if(k6==true){i=6; j5=5; r=r+1;g6=g6+1;if(r>6){r=6;};text1="Mentor Details"} ;
 if(k7==true){i=7; j6=6; r=r+1;g7=g7+1;if(r>7){r=7;};text1="Recommended Roles"} ;
 if(k8==true){i=8; j7=7; r=r+1;g8=g8+1;if(r>8){r=8;};text1="Web Links and Resources"} ;
 if(r==8 && g1==1 && g2==1 && g3==1 && g4==1 && g5==1 && g6==1 && g7==1 && g8==2){r1=0;}
  
  return (
    <div>
       
      <article style={{  
    width:"100%",
   height:'60px',
   boxShadow: '1px 2px 9px lightgray',
   justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'
  
   }}>
     <a href="https://react-hnjjf3.stackblitz.io/"  style={{ backgroundColor:'white',
   border:'white',height:'20px',textDecoration: 'none'}} >
       <div style={{display:'flex',
    flex:1,
   flexdirection:'row-reverse',
   justifyContent:'space-between'}}><div style={{color:'rgb(127,0,255)'}}><AiOutlineArrowLeft/></div>&nbsp; <div style={{color:'black'}}>Back</div></div></a>
  <div style={{fontWeight:'bold',fontSize:"25px"}}>Add New Internship</div>
   <a href="https://react-gusdqt.stackblitz.io/" style={{height:'25px',
   color:r1==1?'gray':'white',
   backgroundColor:r1==1?'rgb(230,231,243)':'rgb(127,0,255)',
   border:r1==1?'rgb(230,231,243)':'rgb(127,0,255)',
   borderRadius:'8px',
   padding:'2px',
   textDecoration: 'none'
  }} >
       <div style={{display:'flex',
    flex:1,
   flexdirection:'row-reverse',
   justifyContent:'space-between',}}> <div>Continue to Next Step</div>&nbsp;<div><AiOutlineArrowRight/> </div></div></a>
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
onClick={r==0?h1:h}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==1 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   
   borderRadius:'8px',
   boxShadow: i==1?'1px 2px 9px gray':''
   }}><div style={{display:'flex'}}><div>Category</div>&nbsp;&nbsp;<div style={{visibility: j1==1  && g1>=1 && /*(*/g2>=1/* || ..)*/? 'visible' : 'hidden', color:'rgb(127,0,255)'}}><BsFillPatchCheckFill/></div></div><div style={{color:i==1?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

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
onClick={r==1?h2:h}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border: i==2 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==2?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div style={{display:'flex'}}><div>Description</div>&nbsp;&nbsp;<div style={{visibility: j2==2 && g2>=1 ? 'visible' : 'hidden', color:'rgb(127,0,255)'}}><BsFillPatchCheckFill/></div></div><div style={{color:i==2?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

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
onClick={r==2?h3:h}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border: i==3 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==3?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div style={{display:'flex'}}><div>Location</div>&nbsp;&nbsp;<div style={{visibility: j3==3  ? 'visible' : 'hidden', color:'rgb(127,0,255)'}}><BsFillPatchCheckFill/></div></div><div style={{color:i==3?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

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
onClick={r==3?h4:h}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',
   backgroundColor:'white',
   border:i==4 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==4?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div style={{display:'flex'}}><div>Benefits</div>&nbsp;&nbsp;<div style={{visibility: j4==4  ? 'visible' : 'hidden', color:'rgb(127,0,255)'}}><BsFillPatchCheckFill/></div></div><div style={{color:i==4?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

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
onClick={r==4?h5:h}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==5 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==5?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div style={{display:'flex'}}><div>Intro Video</div>&nbsp;&nbsp;<div style={{visibility: j5==5  ? 'visible' : 'hidden', color:'rgb(127,0,255)'}}><BsFillPatchCheckFill/></div></div><div style={{color:i==5?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>


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
onClick={r==5?h6:h}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==6 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==6?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div style={{display:'flex'}}><div>Mentor Details</div>&nbsp;&nbsp;<div style={{visibility: j6==6  ? 'visible' : 'hidden', color:'rgb(127,0,255)'}}><BsFillPatchCheckFill/></div></div><div style={{color:i==6?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

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
onClick={r==6?h7:h}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==7 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==7?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div style={{display:'flex'}}><div>Recommended Roles</div>&nbsp;&nbsp;<div style={{visibility: j7==7  ? 'visible' : 'hidden', color:'rgb(127,0,255)'}}><BsFillPatchCheckFill/></div></div><div style={{color:i==7?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

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
onClick={r==7?h8:h}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==8 &&g8==1 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   boxShadow: i==8 && g8==1?'1px 2px 9px gray':'',
   borderRadius:'8px'}}><div style={{display:'flex'}}><div>Web Links & Resources</div>&nbsp;&nbsp;<div style={{visibility: g8>1  ? 'visible' : 'hidden', color:'rgb(127,0,255)'}}><BsFillPatchCheckFill/></div></div><div style={{color:i==8 && g8==1?'rgb(127,0,255)':'gray'}}><MdPlayArrow/></div></button></div>

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
     <button  style={{width:'100%',height:'55px',
   padding:'18px',
  color:'rgb(127,0,255)',
   backgroundColor:'rgb(230,231,243)',
   border:'2px solid pink',
   borderStyle:'dashed',
   borderRadius:'8px',borderColor:'rgb(127,0,255)'}}><BsPlusSquare/>&nbsp;&nbsp;&nbsp;Add More</button></div>
   
   </div>
   
</article>
<div style={{visibility: i!=0  ?  'visible':'hidden'}}>
<article style={{ float: 'right', width:'55%', backgroundColor:'white',border:'1px solid white',height:'235px',visibility: i!=0  ?  'visible':'hidden'}}>
   <div style={{width:'100%'}}>
<div style={{fontWeight:'bold',fontSize:"22px",visibility: i!=0  ?  'visible':'hidden'}}>{text1}</div>
<br/>
<div style={{width:'100%'}} >
   {i==1?<SearchBar/>:i==2?<Description/>:i==3?<SearchBar1/>:i==4?<Description/>:i==5?<OpenOnClick/>:i==6 ?<Mentor/>:i==7?<Roles/>:<Web/>}</div></div> 


   
   </article>
   </div>
   
    </div>
  );

  j1=0;
    j2=0;
   j3=0;
   j4=0;
  j5=0;
 j6=0;
    j7=0;
    r=0;
}
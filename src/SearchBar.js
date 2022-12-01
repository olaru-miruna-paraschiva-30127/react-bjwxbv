
import React, { useState } from "react";
import {HiOutlineMagnifyingGlass} from "react-icons/hi";
import {CiCircleRemove} from "react-icons/ci";

export default function SearchBar() {
  const itemList = [
    "Technology",
    "Development"
  ];
  
const text="Search Category";
let x=1;
let g;
  const [filteredList, setFilteredList] = new useState(itemList);
  const [t, sett] = new useState(true);
  const h2 = () => {
    sett(!t);
   };
   const [y,sety]=useState(0);
   const h1 = () => {
    sety(y+1);
   };
   const [names, setNames] = useState([]);
   const handleClick = (x) => {
     h1;
    // 👇️ push to end of state array
    setNames(current => [...current, x]);

    // 👇️ spread an array into the state array
    // setNames(current => [...current, ...['Carl', 'Delilah']]);

    // 👇️ push to beginning of state array
    // setNames(current => ['Zoey', ...current]);
  };
  const filterBySearch = (event,t) => {
    
  
   
    // Access input value
    const query = event.target.value;
    // Create copy of item list
   
    var updatedList = [...itemList];
    var updatedList = [...itemList];
    
    // Include all elements which includes the search query
    
    updatedList = updatedList.filter((item) => {

      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    
    var updatedList1 = [...updatedList];
    setFilteredList(updatedList1);
     };
     x=console.log(JSON.stringify(filteredList) === JSON.stringify(itemList)); //true
  return (
    <div className="SearchBar">
      <div className="search-header">
        <div className="search-text"></div>
        <input  style={{backgroundColor:'rgb(230,231,243)', border:'1px solid rgb(190,190,190)',
   borderRadius:'8px',width:'100%',height:'40px'}} placeholder={text} onKeyPress={(e) => { if (e.key === "Enter"){handleClick(e.target.value); e.target.value=null; h2;} 
                        }} id="search-box" onClick={h2} onChange={
         (event)=>filterBySearch(event,x)
          
          } />
          
     
      </div>
      <div style={{height:'70px',backgroundColor:'white'}}>
      <div style={{visibility: !t  ? 'visible' : 'hidden',height:'60%'}} id="item-list">
        <ol style={{backgroundColor:'white'}}>
          {filteredList.map((item, index) => (
            <div  onClick={(e) => {  {handleClick(filteredList[index])}; }}   >

            {item}
            <hr/>
         
            </div>
          ))}
       </ol>
        
      </div>
      <br/>
      <br/>
      
      <div style={{height:'40%',backgroundColor:'white',width:''}}>
        
        <button  style={{backgroundColor:'rgb(204,204,255)', color:/*a3 ?'black':*/'rgb(153,50,204)',borderRadius:'8px',borderColor:'rgb(153,50,204)'}}>{names[0]}</button>
        &nbsp;&nbsp;&nbsp;
      <button  style={{backgroundColor:'rgb(204,204,255)', color:/*a3 ?'black':*/'rgb(153,50,204)',borderRadius:'8px',borderColor:'rgb(153,50,204)'}}>{names[1]}</button>
      </div></div>
    </div>
  );
 
}

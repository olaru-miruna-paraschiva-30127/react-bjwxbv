
import React, { useState } from "react";

export default function SearchBar() {
  const itemList = [
    "Technology",
    "Development"
  ];

let x=1;
  const [filteredList, setFilteredList] = new useState(itemList);
  const [t, sett] = new useState(true);
  const h2 = () => {
    sett(!t);
   };
   const [names, setNames] = useState([]);
   const handleClick = (x) => {
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
        <div className="search-text">Search:</div>
        <input onKeyPress={(e) => { if (e.key == "Enter"){handleClick(e.target.value);}
                        }} id="search-box" onClick={h2} onChange={
         (event)=>filterBySearch(event,x)
          
          } />
      </div>
      <div style={{visibility: !t ? 'visible' : 'hidden'}} id="item-list">
        <ol >
          {filteredList.map((item, index) => (
            <li >{item}</li>
          ))}
        </ol>
        {names}
      </div>
     
    </div>
  );
}
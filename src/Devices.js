import React, { useState } from 'react';
import './devices.css';


function Devices(props) {
  console.log(props.database) 
  return (
    <div className="row w3-row-padding" style={{padding:"5px 5px", backgroundColor: "#8b6f47"}}>      
      <Things />
    </div>
  );
}

 function Things() {
    
   const mydatabase = [
    {Ip:"192.168.1.15", Name:"ESP44GG66", Place:"Garage Door", Description:"This is a RF chip", State:false},
    {Ip:"192.168.1.19", Name:"ESP1J3K56", Place:"Floor Lamp", Description:"This is a great device", State:true},
    {Ip:"192.168.1.21", Name:"ESP8D7S5E", Place:"Table Lamp", Description:"The best thing ever", State:false},
    {Ip:"192.168.1.32", Name:"ESP3G5K0S", Place:"Front Door", Description:"The last thing ever", State:true},
    {Ip:"192.168.1.01", Name:"ESP3G5K44", Place:"Main Bedroom", Description:"It's a Nice Bed", State:true},
    {Ip:"192.168.1.07", Name:"ESP3G5K6T", Place:"Basement", Description:"Wet basement", State:true},
    {Ip:"192.168.1.11", Name:"ESP3G5KHY", Place:"Heater", Description:"It's cold in here", State:false},
    {Ip:"192.168.1.25", Name:"ESP3G5K7S", Place:"Coffe Maker", Description:"Best Coffe ever", State:false},    
    ]; 
  return (
    <>     
      {  
        mydatabase.map((element, index) => { return <div 
        className = "col-sm-4 l3 m6 w3-margin-bottom"
        key={index}><Device database = {element} /></div> }) 
      }         
    </>
  );
}

function Device(props) {   
  
  let {Name: name, Place: place, State: state} = props.database; //This is object destructuring
  // eslint-disable-next-line
  const [thingName, setthingName] = useState(name);
  // eslint-disable-next-line
  const [thingPlace, setthingPlace] = useState(place);
  const [lightStatus, setlightStatus] = useState(state); //useState is a Hook; “array destructuring”
  
  return ( 
    <>
       <div className="w3-container" style = {{paddingTop: "5px", paddingBottom: "5px"}}>
          <ul>
            <li>Device: {thingName}</li>
            <li>Location: {thingPlace} </li>
            <li>Status: {lightStatus ? <> On </> : <> Off </>} </li>
          </ul>
        </div>
      <div style = {{ maxWidth : "max-content", paddingBottom: "8px", margin : "0 auto" }}>
      <button 
          className="button" style={{ backgroundColor: lightStatus ? "#3e8e41" : "#4c6faf"}} 
          onClick={() => setlightStatus(!lightStatus)}>
          {lightStatus ? 'ON' : 'OFF'}
      </button>        
      </div>
    
    </>
  );
}



export default Devices;
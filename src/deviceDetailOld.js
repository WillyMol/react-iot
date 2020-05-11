import React, { useState, useEffect } from 'react';
import './devices.css';


const DeviceDetail = ( {match}, props ) => {



    useEffect(() => {
        const itemId = match.params.id               
        fetchItem(itemId);       
        console.log(match);
        console.log(props.history);    
    },[match, props]);
    
    // eslint-disable-next-line
    const [item,setItem] = useState( {  } );
    //console.log(match.params.id)
    const fetchItem = async (itemId) => {
        //this line below you can use to get external data
        /* const data = await fetch (<here the external address>);
        const items = await data.json(); */

        const mydatabase = [
          {Ip:"192.168.1.15", Name:"ESP44GG66", Place:"Garage Door", Description:"This is a RF chip", State:false},
          {Ip:"192.168.1.19", Name:"ESP1J3K56", Place:"Floor Lamp", Description:"This is a great device", State:true},
          {Ip:"192.168.1.21", Name:"ESP8D7S5E", Place:"Table Lamp", Description:"The best thing ever", State:false},
          {Ip:"192.168.1.32", Name:"ESP3G5K0S", Place:"Front Door", Description:"The last thing ever", State:true},
          {Ip:"192.168.1.01", Name:"ESP3G5K44", Place:"Main Bedroom", Description:"It's a Nice Bed", State:false},
          {Ip:"192.168.1.07", Name:"ESP3G5K6T", Place:"Basement", Description:"Wet basement", State:true},
          {Ip:"192.168.1.11", Name:"ESP3G5KHY", Place:"Heater", Description:"It's cold in here", State:false},
          {Ip:"192.168.1.25", Name:"ESP3G5K7S", Place:"Coffe Maker", Description:"Best Coffe ever", State:true},    
          ];
         
          let dev = mydatabase.find(obj => obj.Ip === itemId);
          //console.log (dev);
          setItem(dev);
          //console.log(dev.State)

    };
    

//className="w3-container" style = {{paddingTop: "5px", paddingBottom: "5px" }}
    return (
        <>        
            <div className = "cali">
                <div className="w3-container medellin" >
                    <ul>
                    <li>Device: {item.Name}</li>
                    <li>Location: {item.Place} </li>
                    <li>Description: {item.Description} </li>
                    <li>IP: {item.Ip} </li>
                    <li>Status: {item.State ? <> On </> : <> Off </>} </li>
                    </ul>
                </div>
                <div className = "cartagena">
                    <button 
                        className="button" style={{ backgroundColor: item.State ? "#3e8e41" : "#4c6faf"}}
                        onClick={(e) => {
                                            const val = !item.State;
                                            setItem(prevState => {
                                            return { ...prevState, State: val }
                                            });                           
                                            /* the ...prevState part will get all of the properties of 
                                            the object and the Sate: val part will overwrite the 
                                            message property.  */                                   
                                        }}>
                        {item.State ? 'ON' : 'OFF'}
                    </button>        
                </div>   
            </div>             
        </>        
    ); 
}
export default DeviceDetail;
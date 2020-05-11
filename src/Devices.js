import React, { useState, useEffect } from 'react';
import './devices.css';
import { Link } from 'react-router-dom';
//const axios = require('axios').default;
import { axiosGetAll } from './axiosRequest'

const Devices = () => {

  const [items, setItems] = useState([]);
  

  useEffect(() => {  
    const setdata = async () => {
      const respuesta = await axiosGetAll();
      setItems(respuesta)      
    }
    setdata();     
     //GetJsonDataBase();
  },[]);
  
   
  // eslint-disable-next-line
  const GetJsonDataBase =  () => {
    console.log("inside handleGetJson");
    fetch(`./fakeData.json`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }  
      })
      .then((response) =>  response.json())
      .then((database) => {                            
                            //console.log(database);                            
                            setItems(database);
                          })
      .catch(err => {                            
                    console.log("Error Reading data " + err);
                    return([])
                    });
  }
  

    
  return (
    <div className="row w3-row-padding cucuta" >                
       {  
         items.map((element) => { 
           return (
                    <div className = "col-sm-4 l3 m6 w3-margin-bottom" key={element._id}>                        
                        <div className= "bosa">                        
                          <Link to={{
                              pathname: `/devices/${element._id}`,
                              state: {itemDetail: element }                              
                              }} >                        
                            {element.Place}                                                    
                          </Link>
                        </div>
                        <div className = "pasto">
                          {element.State ? <> ON </> : <> OFF </>} 
                        </div>                        
                    </div>
                  ); 
          }) 
       }              
    </div>
  );
}
export default Devices;
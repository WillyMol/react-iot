import React, { useState, useEffect } from 'react';
import './devices.css';
//import { AllDevices } from './components/AllDevices';
//const axios = require('axios').default;
import { axiosGetAll } from './axiosRequest'
import { Link } from 'react-router-dom';

const Devices = () => {

  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
 
  useEffect(() => {
    axiosGetAll()
          .then(res => {
            setItems(res); 
            setLoad(true);
            //console.log(res);
        }).catch(err => {
                setError(err);
                setLoad(true);
            }
        );         
    // GetFakeData();
  },[]);

  if (load) {
    return (<>
                {error ? <li>{error.message}</li> : 
                <div  className="row w3-row-padding cucuta" >                
                {  
                  items.map((element) => {                    
                    return (
                             <div className = "col-sm-4 l3 m6 w3-margin-bottom w3-hover-cyan" key={element._id}>                        
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
                }
            </>);
  } else {
      return (
          <div>
              Loading...
          </div>
      );
    }
}
export default Devices;
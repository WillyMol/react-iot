import React from 'react';
import './devices.css';
import { axiosPatchOne } from './axiosRequest'


class DeviceDetail extends React.Component {
	constructor(props){
		super(props);
        this.state = {status : props.history.location.state.itemDetail.State};
        //this.axiosPatch = this.axiosPatch.bind(this);        		
    }

     /* axiosPatch = async () => {
         const respuesta = await axiosPatchOne();
        console.log(respuesta); 
     }  */ 
     
    
    render() {
        const {Name, Place, Description, Ip } = this.props.history.location.state.itemDetail;
        const _id = this.props.history.location.state.itemDetail._id
        console.log(`http://localhost:5000/posts/${_id}`);
            return (
                <>        
                    <div className = "cali">
                        <div className="w3-container medellin" >
                            <ul>
                            <li>Device Name: {Name} </li>
                            <li>Location: {Place} </li>
                            <li>IP: {Ip} </li>
                            <li>Description: {Description} </li>                            
                            <li>State: {this.state.status ? <> On </> : <> Off </>} </li>
                            </ul>
                        </div>
                        <div className = "cartagena">
                            <button 
                                className="button" style={{ backgroundColor: this.state.status ? "#3e8e41" : "#4c6faf"}}
                                onClick={(e) => {                                                    
                                                    this.setState({status: !this.state.status});
                                                    //this.axiosPatch(this.state.status,_id);                                                                         
                                                    axiosPatchOne(!this.state.status, _id).then(function(response) {console.log(response);});
                                                }}>
                                {this.state.status ? 'ON' : 'OFF'}
                            </button>        
                        </div>   
                    </div>             
                </>        
            );
    }         
}
export default DeviceDetail;
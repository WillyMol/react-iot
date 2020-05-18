import React from 'react';
import './devices.css';
import { axiosPatchOne } from './axiosRequest'
import { Link }  from 'react-router-dom';

class DeviceDetail extends React.Component {
	constructor(props){
		super(props);
        this.state = {isToggleOn : props.history.location.state.itemDetail.State};
        this.UpdateMongoDB = this.UpdateMongoDB.bind(this);        		
    }

    UpdateMongoDB = (id) => {        
        axiosPatchOne(!this.state.isToggleOn,id)
          .then(res => {console.log(res)})
          .catch(err => {console.log(err)});      
    }  
      
    render() {
       // const {Name, Place, Description, Ip } = this.props.history.location.state.itemDetail;
        //const _id = this.props.history.location.state.itemDetail._id
        const element = this.props.history.location.state.itemDetail
        //console.log(`http://localhost:5000/posts/${_id}`);
            return (
                <>        
                    <div className = "cali">
                        <div className="w3-container medellin" >
                            <ul>
                            <li>Device Name: {element.Name} </li>
                            <li>Location: {element.Place} </li>
                            <li>IP: {element.Ip} </li>
                            <li>Description: {element.Description} </li>                            
                            <li>State: {this.state.isToggleOn ? <> On </> : <> Off </>} </li>                                                        
                            </ul>
                            <p style ={{textAlign: "center"}}><i><Link to={{
                                                                            pathname: `/edit/${element._id}`,
                                                                            state: {itemDetail: element }                              
                                                                           }}>Edit</Link>  | <Link to='/'>Delete</Link></i></p>
                        </div>
                        <div className = "cartagena">
                            <button 
                                className="button" style={{ backgroundColor: this.state.isToggleOn ? "#3e8e41" : "#4c6faf"}}
                                onClick={(e) => {                                                    
                                                    this.setState({isToggleOn: !this.state.isToggleOn});                                                                                                     
                                                    this.UpdateMongoDB(element._id);
                                                    this.props.history.location.state.itemDetail.State = !this.state.isToggleOn;
                                                    //console.log(this.props.history.location.state.itemDetail.State);
                                                }}>
                                {this.state.isToggleOn ? 'ON' : 'OFF'}
                            </button>        
                        </div>   
                    </div>             
                </>        
            );
    }         
}
export default DeviceDetail
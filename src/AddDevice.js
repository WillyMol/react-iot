import React from 'react';
import './devices.css';

import 'w3-css/w3.css';
import '../src/radiobutton.css'
import { axiosCreateOne } from './axiosRequest'

class AddDevice extends React.Component {
	constructor(props){
		super(props);
        
       this.state = {
            _id :  "",
            Name : "Device Name",
            Place : "En la Luna",
            Ip : "192.168.1.150",
            Description : "Este es un dispositivo Dummy",            
            State : false
        }; 
                
        //console.log(this.state)      
        this.UpdateMongoDB = this.UpdateMongoDB.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this)
        // const database1 = props.history.location.state.itemDetail;        
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.UpdateMongoDB()                   
      }

    UpdateMongoDB = () => {
        //console.log(this.state);        
        axiosCreateOne(this.state)
          .then(res => {
              //console.log(res);
              this.props.history.push("/devices");
            })
          .catch(err => {console.log(err)});      
    } 
         
    handleName = (e) => {
        this.setState({
            Name: e.target.value
        });
    }
    handlePlace = (e) => {
        this.setState({
            Place: e.target.value
        });
    }
    handleIp = (e) => {
        this.setState({
            Ip: e.target.value
        });
    }
    handleDescription = (e) => {
        this.setState({
            Description: e.target.value
        });
    }    
    handleState = (e) => {
        if (e.target.value === "true") this.setState( {State: true});
        else this.setState( {State: false});
    }
    
    render() {       
        //console.log(`http://localhost:5000/posts/${_id}`);
            return (
                <>                           
                            <div className="w3-card-4">
                                <div className="w3-container w3-brown">
                                    <h2>Add Device</h2>
                                </div>

                                <form onSubmit={this.handleSubmit} className="w3-container">
                                    <p>
                                    <label className="w3-text-brown"><b>Device Name:</b></label>
                                    <input className="w3-input w3-border w3-sand" type="text" placeholder={this.state.Name} onChange={this.handleName}></input>
                                    </p>
                                    <p>
                                    <label className="w3-text-brown"><b>Location:</b></label>
                                    <input className="w3-input w3-border w3-sand" type="text" placeholder={this.state.Place} onChange={this.handlePlace}></input>
                                    </p>
                                    <p>
                                    <label className="w3-text-brown"><b>IP:</b></label>
                                    <input className="w3-input w3-border w3-sand" type="text" placeholder={this.state.Ip} onChange={this.handleIp}></input>
                                    </p>
                                    <p>
                                    <label className="w3-text-brown"><b>Description:</b></label>
                                    <input className="w3-input w3-border w3-sand" type="text" placeholder={this.state.Description} onChange={this.handleDescription}></input>
                                    </p>

                                    <p>
                                     <label className="w3-text-brown"><b>State:</b></label>                                   
                                    </p>

                                    <label className="container">True
                                    <input type="radio"  name="state" value={true} checked={this.state.State? "checked":false} onChange={this.handleState}></input>                                    
                                    <span className="checkmark"></span>
                                    </label>

                                    <label className="container">False
                                    <input type="radio"   name="state" value={false} checked={this.state.State? false: "checked"} onChange={this.handleState}></input>                                    
                                    <span className="checkmark"></span>
                                    </label>

                                    <p><input className="button" style={{ backgroundColor: "#3e8e41"}} type="submit" value="Add" /></p>
                                </form>
                            </div>                                                                                      
                </>        
            );
    }         
}
export default AddDevice;
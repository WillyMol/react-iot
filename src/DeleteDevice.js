import React from 'react';
import './devices.css';

import 'w3-css/w3.css';
import '../src/radiobutton.css'
import { axiosDeleteOne } from './axiosRequest'

class DeleteDevice extends React.Component {
	constructor(props){
		super(props);
        
       this.state = {
            _id :  props.history.location.state.itemDetail._id,
            Name : props.history.location.state.itemDetail.Name,
            Place : props.history.location.state.itemDetail.Place,
            Ip : props.history.location.state.itemDetail.Ip,
            Description : props.history.location.state.itemDetail.Description,            
            State : props.history.location.state.itemDetail.State
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
        //console.log(this.state._id);        
        axiosDeleteOne(this.state._id)
          .then(res => {
              //console.log(res);
              this.props.history.push("/devices");
            })
          .catch(err => {console.log(err)});      
    } 
         
    
    
    render() {       
        //console.log(`http://localhost:5000/posts/${_id}`);
            return (
                <>                           
                            <div className="w3-card-4">
                                <div className="w3-container w3-brown">
                                    <h2>Delete Device</h2>
                                </div>

                                <form onSubmit={this.handleSubmit} className="w3-container">
                                    <p>
                                    <label className="w3-text-brown"><b>Device Name:</b></label>
                                    <input className="w3-input w3-border w3-sand" type="text" value={this.state.Name} disabled ></input>
                                    </p>
                                    <p>
                                    <label className="w3-text-brown"><b>Location:</b></label>
                                    <input className="w3-input w3-border w3-sand" type="text" value={this.state.Place} disabled ></input>
                                    </p>
                                    <p>
                                    <label className="w3-text-brown"><b>IP:</b></label>
                                    <input className="w3-input w3-border w3-sand" type="text" value={this.state.Ip} disabled ></input>
                                    </p>
                                    <p>
                                    <label className="w3-text-brown"><b>Description:</b></label>
                                    <input className="w3-input w3-border w3-sand" type="text" value={this.state.Description} disabled ></input>
                                    </p>

                                    <p>
                                     <label className="w3-text-brown"><b>State:</b></label>                                   
                                    </p>

                                    <label className="container">True
                                    <input type="radio"  name="state" value={true} checked={this.state.State? "checked":false} disabled onChange={this.handleState}></input>                                    
                                    <span className="checkmark"></span>
                                    </label>

                                    <label className="container">False
                                    <input type="radio"   name="state" value={false} checked={this.state.State? false: "checked"} disabled onChange={this.handleState}></input>                                    
                                    <span className="checkmark"></span>
                                    </label>

                                    <p><input className="button" style={{ backgroundColor: "#DA4E30"}} type="submit" value="Delete" /></p>                                                                        
                                </form>
                            </div>                                                                                      
                </>        
            );
    }         
}
export default DeleteDevice;
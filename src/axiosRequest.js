const axios = require('axios').default;

/* export const axiosGetAll = async () => {
    axios.get('http://localhost:5000/posts')
    .then((response) => {
      console.log(response.data);
      return response.data    
    })
    .catch((err) => {
        console.log({ "mensaje" : err });             
    });       
  }; */

  export async function axiosGetAll() {
    try {
      const response = await axios.get('http://localhost:5000/posts');
      console.log(response.data);      
      return (response.data)
    } catch (error) {
      console.error(error);
    }
  }

 
 export const axiosCreateOne = async (data) => {
    axios.post('http://localhost:5000/posts',{
      Name: data.Name,
      Place: data.Place,
      Ip: data.Ip,
      Description: data.Description,
      State: data.State
    }).then(response =>{
      console.log(response.data.message);
      return response.data.message;      
    }).catch(err =>{
      console.log(err);
    })
  }
  
  /* axiosCreateOne(data).then(function(response) {
    console.log(response);
  }); */
  
  export const axiosPatchOne = async function(state, id){
    axios.patch(`http://localhost:5000/posts/${id}`,{     
      "State": state
    }).then(response =>{
      console.log(response.data);
      return response.data;      
    }).catch(err =>{
      console.log(err);
    })
  }
  
  /* axiosPatchOne(state, id).then(function(response) {
    console.log(response);
  }); */

 
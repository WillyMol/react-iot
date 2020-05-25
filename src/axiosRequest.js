const axios = require('axios').default;

export const axiosGetAll = () => {
  return new Promise((resolve, reject) => {
      axios.get('http://localhost:5000/posts').then(res => {
          resolve(res.data);
      }).catch(err => reject(err));
  });
};

export const axiosPatchOne = (state, id) => {
  return new Promise((resolve, reject) => {
      axios.patch(`http://localhost:5000/posts/${id}`,{     
        "State": state
      }).then(response => {
          resolve(response.data);
      }).catch(err => reject(err));
  });
}; 
export const axiosDeleteOne = (id) => {
  return new Promise((resolve, reject) => {
      axios.delete(`http://localhost:5000/posts/${id}`)
      .then(response => {
          resolve(response.data);
      }).catch(err => reject(err));
  });
}; 

export const axiosPatchAll = (data) => {
  return new Promise((resolve, reject) => {
      axios.patch(`http://localhost:5000/posts/${data._id}`,{     
        "Name": data.Name,
        "Place": data.Place,
        "Ip": data.Ip,
        "Description": data.Description,
        "State": data.State
      }).then(response => {
          resolve(response.data);
      }).catch(err => reject(err));
  });
}; 

export const axiosCreateOne = (data) => {
  return new Promise((resolve, reject) => {
      axios.post('http://localhost:5000/posts',{     
        "Name": data.Name,
        "Place": data.Place,
        "Ip": data.Ip,
        "Description": data.Description,
        "State": data.State
      }).then(response => {
          resolve(response.data);
      }).catch(err => reject(err));
  });
};
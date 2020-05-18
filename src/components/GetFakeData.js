const GetFakeData =  () => {
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
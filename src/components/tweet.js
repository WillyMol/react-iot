
const Device =(props) => {   
  
    let {Name: name, Place: place, State: state} = props.database; //This is object destructuring
    const [lightStatus, setlightStatus] = useState(state); //useState is a Hook; “array destructuring”

    function checkStorage(){
      console.log(name + " " + localStorage.getItem(name))
    }
    
    return (     
      <>        
        <div className="w3-container" style = {{paddingTop: "5px", paddingBottom: "5px"}}>
            <ul>
              <li>Device: {name}</li>
              <li>Location: {place} </li>
              <li>Status: {lightStatus ? <> On </> : <> Off </>} </li>
            </ul>
          </div>
        <div style = {{ maxWidth : "max-content", paddingBottom: "8px", margin : "0 auto" }}>
        <button 
            className="button" style={{ backgroundColor: lightStatus ? "#3e8e41" : "#4c6faf"}} 
            onClick={() => {
                            const lstat = !lightStatus
                            setlightStatus(lstat);
                            localStorage.setItem(name, lstat); 
                            checkStorage()
                            }}>
            {lightStatus ? 'ON' : 'OFF'}
        </button>        
        </div>    
      </>
    );
}
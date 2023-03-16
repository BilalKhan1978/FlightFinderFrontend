import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetConnectedFlightRequestDto, GetRootsRequestDto, SearchFlightDto } from "../types";
import { styles } from "./Style";

import  { AppService } from "./http-commoc";

const Search = () => {
 
  const [flightdata,flightdatachange]= useState<GetRootsRequestDto[]>([]);
  const [connectedflightdata,connectedflightdatachange]= useState<GetConnectedFlightRequestDto[]>([]);
  
  const [showMessage,showMessagechange]=useState<boolean>(false);
  const navigate=useNavigate();
  // const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  // const value = event.target.value;  
  
  // };
  
  const searchFlights=async() =>{
    const appService = new AppService();
    const response = await appService.getFlights(values).catch((error)=>{console.log(error.message)});
    if(response==null)
    showMessagechange(true);
    flightdatachange(response);
    
  }
  const searchConnectedFlights=async() =>{
    const appService = new AppService();
    const response = await appService.getConnectedFlights(values);
    connectedflightdatachange(response);
    showMessagechange(false);
  }
  
  const showRecordDetails = (data: GetRootsRequestDto) => {
  //   navigate('/milkview/'+data.id);
  //  setRecordForEdit(data)
}
const [values, setValues] = useState<SearchFlightDto>({
    DepartureDestination: '',
    ArrivalDestination: '',
    DepartureTime: new Date().toLocaleDateString()
    
});
function handleInputChange(e:any)  {
  let value  = e.target.value;
  setValues({
      ...values,
      [e.target.id]: value
  })
}
  
  const singleFlightCard = (data: GetRootsRequestDto) => (
    <div className="card" onClick={() => { showRecordDetails(data) }}>
       
    <div className="card-body">
             
            <br/>
      <div className="row">
      <div className="col-md-4">
      <h4 className="float-right">{data.DepartureDestination} </h4>
      </div>
      <div className="col-md-4">
      
      </div>
      <div className="col-md-4">
      <h4 className="float-left">{data.ArrivalDestination}</h4> 
     
      </div>
      </div>          
      <div className="row">
      <div className="col-md-4">
      <h6 className="float-right">Departure Time: {data.FlightRequests.DepartureAt} </h6>
      </div>
      <div className="col-md-4">
      
      </div>
      <div className="col-md-4">
      <h6 className="float-left">Arrival Time: {data.FlightRequests.ArrivalAt}</h6> 
     
      </div>
      </div>     
      <div className="row">
      <div className="col-md-4">
      <span className="float-right">Available Seats: {data.FlightRequests.AvailabeSeats} </span>
      </div>
      <div className="col-md-4">
      
      </div>
      <div className="col-md-4">
      <span className="float-left">Price: {data.FlightRequests.Adult} {data.FlightRequests.Currency}</span> 
     
      </div>
      </div>      
                
    </div>
    </div>
)
const connectedFlightCard = (data: GetConnectedFlightRequestDto) => (
   <div className="card" onClick={() => {  }}>
     
  <div className="card-body">          
         
    <div className="row">
    <div className="col-md-4">
    <h4 className="float-right">{data.FirstRoot.DepartureDestination} </h4>
    </div>
    <div className="col-md-4">
    
    </div>
    <div className="col-md-4">
    <h4 className="float-left">{data.FirstRoot.ArrivalDestination}</h4> 
   
    </div>
    </div>          
    <div className="row">
    <div className="col-md-4">
    <h6 className="float-right">Departure Time: {data.FirstRoot.FlightRequests.DepartureAt} </h6>
    </div>
    <div className="col-md-4">
    
    </div>
    <div className="col-md-4">
    <h6 className="float-left">Arrival Time: {data.FirstRoot.FlightRequests.ArrivalAt}</h6> 
   
    </div>
    </div>     
    <div className="row">
    <div className="col-md-4">
    <span className="float-right">Available Seats: {data.FirstRoot.FlightRequests.AvailabeSeats} </span>
    </div>
    <div className="col-md-4">
    
    </div>
    <div className="col-md-4">
    <span className="float-left">Price: {data.FirstRoot.FlightRequests.Adult} {data.FirstRoot.FlightRequests.Currency}</span> 
   
    </div>
    </div>      
       -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------       
  
       <div className="row">
    <div className="col-md-4">
    <h4 className="float-right">{data.SecondRoot.DepartureDestination} </h4>
    </div>
    <div className="col-md-4">
            
    </div>
    <div className="col-md-4">
    <h4 className="float-left">{data.SecondRoot.ArrivalDestination}</h4> 
   
    </div>
    </div>          
    <div className="row">
    <div className="col-md-4">
    <h6 className="float-right">Departure Time: {data.SecondRoot.FlightRequests.DepartureAt} </h6>
    </div>
    <div className="col-md-4">
    
    </div>
    <div className="col-md-4">
    <h6 className="float-left">Arrival Time: {data.SecondRoot.FlightRequests.ArrivalAt}</h6> 
   
    </div>
    </div>     
    <div className="row">
    <div className="col-md-4">
    <span className="float-right">Available Seats: {data.SecondRoot.FlightRequests.AvailabeSeats} </span>
    </div>
    <div className="col-md-4">
    
    </div>
    <div className="col-md-4">
    <span className="float-left">Price: {data.SecondRoot.FlightRequests.Adult} {data.SecondRoot.FlightRequests.Currency}</span> 
   
    </div>
    </div>
  </div>
  </div>
)

  return (
    <div>
        
     {/* dropdown */}
    <div style={styles.container}>
      <div className="row">
      <div className="col-md-3">
        <label>Departure* </label>
      <input value={values.DepartureDestination} id="DepartureDestination" onChange={handleInputChange}></input>
      </div>
      <div className="col-md-3">
        <label>Destination* </label>
      <input value={values.ArrivalDestination} id="ArrivalDestination" onChange={handleInputChange}></input>
      </div>
      <div className="col-md-3">
      <label>Date* </label>
      <br/>
      <input value={values.DepartureTime} id="DepartureTime" onChange={handleInputChange}></input>
      </div>
      <div className="col-md-3">
      <br/>
      <button onClick={() => { searchFlights() }}>Search </button>
      </div>
      </div>
      <br/>
    <div className={showMessage? undefined:'hidden'}>No direct flight is available for this route. Do you want to see connected flights?  
    <button style={{textAlign: "center", margin:"20px"}} onClick={() => { searchConnectedFlights() }}> Yes </button>
    </div>
   
      <br/>
      </div> 

        {/* Card section */}
        <div className="col-md-12">
               
                            
                           { flightdata && flightdata.map(item=>(
                                
                                    <div>
                                      {singleFlightCard(item)}
                                      <br/>
                                    </div>
                                  
                               
                            ))}
                       
            </div>
            <div className="col-md-12">
               
                            
                           { connectedflightdata && connectedflightdata.map(item=>(
                                
                                    <div>
                                      {connectedFlightCard(item)}
                                      <br/>
                                    </div>
                                  
                               
                            ))}
                       
            </div>
      {/* { selectedmilk && selectedmilk.map(item=>(
      
    <div>
      <section className="card-container">
      {(<Card
          id={item.id}
          name={item.name}
          type= {item.type}
          storage={item.storage}
           />)}
          <br/>      
         
      </section>
    </div> ))} */}
    </div>
  );
};

export default Search;

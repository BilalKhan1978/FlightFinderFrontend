import { GetRootsRequestDto } from "../types"
import styles from './Card.module.css'

const Card = ({DepartureDestination,ArrivalDestination,FlightRequests}: GetRootsRequestDto) => {
  return (
    <div className={`stack-lg ${styles.card}`}>
         
        
       
      
      <div className="stack-sm">
        <p>{DepartureDestination}</p>
        
      </div>
      <div className="row">
      <div className="col-md-6">
      <span>{ArrivalDestination}</span> 
      </div>
      <div className="col-md-4">
      <span className="float-right">{FlightRequests.AvailabeSeats}</span>
      </div>
      </div>
      
       
     
    </div>
  )
}
export default Card
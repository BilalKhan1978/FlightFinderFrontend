

export interface SearchFlightDto{
    DepartureDestination: string;
    ArrivalDestination:string;
    DepartureTime:string;
}

export interface GetRootsRequestDto{
    DepartureDestination: string;
    ArrivalDestination:string;
    FlightRequests:GetItineraryRequestDto
}
export interface GetItineraryRequestDto{
    Flight_Id:string;
    DepartureAt:string;
    ArrivalAt:string;
    AvailabeSeats:number;
    Currency:string;
    Adult:number;
    Child:number;
}
export interface GetConnectedFlightRequestDto{
    FirstRoot:GetRootsRequestDto;
    SecondRoot:GetRootsRequestDto;
}
export interface User{
    UserName:string;
    Password:string;
}
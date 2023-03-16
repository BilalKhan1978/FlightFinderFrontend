import axios from "axios";

export class AppService {


    public async getUsers(): Promise<any> {
        const response = await axios.get('/api/users');
        return response.data;
    }

    public async getFlights(searchFlight: any): Promise<any> {
        const response = await axios.post(`https://localhost:7018/api/Root/search/`,searchFlight);
        return response.data;
    }


public async getConnectedFlights(searchFlight: any): Promise<any> {
    const response = await axios.post(`https://localhost:7018/api/Root/searchConnectedRoots/`,searchFlight);
    return response.data;
}
public async login(userName:string,password:string): Promise<any> {
    let user= {
        UserName:userName,
        Password:password
    }
    const response = await axios.post(`https://localhost:7018/api/JwToken/`,user);
    return response.data;
}
}
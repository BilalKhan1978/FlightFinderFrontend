import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';
import { AppService } from './http-commoc';
import { styles } from "./Style";

function Login() {
  const [values, setValues] = useState<User>({
    UserName: '',
    Password: ''   
    
});
const [userName,userNameChange]= useState("");
const [password,passwordChange]= useState("");
const [showMessage,showMessagechange]=useState<boolean>(false);
const navigate=useNavigate();
const login=async() =>{
  const appService = new AppService();
  const response = await appService.login(userName,password).catch((error)=>{console.log(error.message)});
  if(response)
  {
    navigate('/');
  }
  showMessagechange(true);
}
function handleInputChange(e:any)  {
  let value  = e.target.value;
  setValues({
      ...values,
      [e.target.id]: value
  })
}

    return (
      <div style={styles.container}>
<div className="Login" style={{textAlign: "center"}}>
      <div >
       
        <div >
          <input value={userName} className="email" id="email" placeholder="Enter your email" onChange={e=>userNameChange(e.target.value)}></input>
          </div>
          <br/>
          <div >
          <input value={password} className="password" id="password"  placeholder="Enter your password"
           type="password"  onChange={e=>passwordChange(e.target.value)}></input> 
        </div>
        <br/>
        <div style={{display: "flex",justifyContent: "center"}}>
          <button onClick={() => { login() }}>Login</button>
        </div>
        <br/>
        <div className={showMessage? undefined:'hidden'}>UserName or Password is incorrect  </div>
    </div>
  </div>
  </div>
   );
}

  export default Login;
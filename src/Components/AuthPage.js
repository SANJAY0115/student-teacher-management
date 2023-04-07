import { Button,  FormControl, FormLabel, Input, Typography } from '@mui/material'
import React, {useState}from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'
import { authdata } from '../Data/authdata'

const AuthPage = () => {
  const[auth, setAuth] = useState(authdata); 
  const [loginName, setLogiName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const history  = useHistory()

  const loginUser = () =>{
    if(loginName === auth[0].name 
      && password === auth[0].password) {
      localStorage.setItem("user-name", loginName);
      setError(false)
      history.push("/details")
    } else {
      setError(true)
    }

  }

  return (
 <Base
 title= "Login page for Admin access"
 description = "Authentication Page"
 >
  <br/> <br/>
  <div className = "login-page">



          <FormControl>
            <FormLabel>UserName</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="name"
              onChange= {(e)=>setLogiName(e.target.value)}
              value = {loginName}
            />
          </FormControl> {" "}
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="  password"
              onChange ={(e)=>setPassword(e.target.value)}
              value = {password}
            />
          </FormControl>
           <br/>
          <Button
          variant="contained"
           sx={{ mt:2 /* margin top */ }}
           onClick= {loginUser}
           >Log in</Button>
     {error ?   
      <Typography>
        Invalid Credentials
      </Typography>
   : ""}
  <br/><br/>
  <br/>
   <p>use this for login</p>
   <h3>username : admin</h3>
   <h3>password : Password@123</h3>


  </div>
 </Base>
  )
}

export default AuthPage
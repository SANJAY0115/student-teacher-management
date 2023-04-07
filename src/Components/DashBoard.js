import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'

const DashBoard = () => {
  const history = useHistory();
  return (
    <Base
    title = "WELCOME TO STUDENT AND TEACHER MANAGEMENT APP"
    description= "ADMIN DASHBOARD TO IMPLEMENT THE CRUD"
    >
      <br/><br/>
      
       <p>click below button link to navigate to their respective pages</p>
       <br/>
        <Button 
        variant='contained'
        color='primary'
        size = "large"
        onClick={()=>history.push("/details")}
        >
        Admin page
        </Button>

        {" "}

        <Button 
        variant='contained'
        color='primary'
        size = "large"
        onClick={()=>history.push("/add-data")}
        >
        Students page
        </Button>


        <br/><br/>
      <div>
      <h3>ADMIN can perform : GET(read) , PUT(edit) , DELETE the data's</h3>
      <h3>STUDENT : can only CREATE(post/add) the data</h3>
      </div>
      
      
     </Base>
  )
}

export default DashBoard


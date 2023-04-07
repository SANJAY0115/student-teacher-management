import { useEffect, useState } from 'react';
import "./App.css"
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './Components/AuthPage';
import DashBoard from './Components/DashBoard';

import StudentProfile from './Components/StudentProfile';
import { StudentDetails } from './Components/Students';

import AddStudents from './Components/AddStudents';
import EditStudents from './Components/EditStudents';


function App() {
   const [studentsData, setStudents] = useState([]);
 // mounting - fetch data from mock api
 useEffect(()=>{
    const getStudents = async () => {
     try {
       const response = await fetch("https://63ae5976ceaabafcf177ee86.mockapi.io/details", {
         method:"GET"
       }); 
       const data = await response.json();
       console.log(data);
       setStudents(data)
     } catch (error) {
       console.log("Error Occured")
     }
    }; 
    getStudents();
 }, [])


   return (
      <div className="App">
  
     <Switch>

      <Route path="/dashboard">
          <DashBoard/>
      </Route>


      <Route path= "/register">
        <AuthPage/>
      </Route>

      <Route path = "/details">
        <StudentDetails 
        studentsData={studentsData} 
        setStudents= {setStudents}/>
      </Route>

      <Route path = "/students">
         <Redirect to = "/details"/>
      </Route>


      <Route path = "/student/:id">
        <StudentProfile studentsData={studentsData} />
      </Route>


      <Route path = "/add-data">
        <AddStudents
        studentsData={studentsData} 
        setStudents= {setStudents}
        />
      </Route>

      <Route path = "/edit/:id">
        <EditStudents 
        studentsData={studentsData}
        setStudents= {setStudents} />
      </Route>

  </Switch>
   

   </div>
 );
}

export default App;





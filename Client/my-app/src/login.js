import {useState} from "react"
import axios from "axios"
import {Link,Route,Routes} from "react-router-dom"

import { Outlet,useNavigate} from "react-router-dom";
import HomePage from "./homePage";
import Movies from "./Movies"
import EditMovie from "./EditMovie"
import AddMovie from "./AddMovie"
import Subscriptions from "./Subscriptions"
import AllMembers from "./AllMembers";
import EditMember from "./EditMember";
import AddMember from "./AddMember";

function Login(){
const navigate=useNavigate()
const [userName,setUserName]=useState()
const [password,setPassword]=useState()


const getUser=async()=>{
      const {data} = await axios.get("http://localhost:8011/api/users")
      let user=  data.find(user => {
   
   return user.Username==userName&&user.Password==password
  
     });
       

 
         
     if(user){
      navigate('/HomePage')
     }
     else{
            alert("doesn't exist!")

     }
} 
    return <div style={{ backgroundColor:"lightcyan" }}>
       Name:<input type="text" onChange={(e)=>{setUserName(e.target.value); sessionStorage.setItem("username",e.target.value)}} />
       Password:<input type={"password"}onChange={(e)=>setPassword(e.target.value)}/><br/>
      <input type="button" value="Login" onClick={getUser}/>

<Routes>
  <Route  path="/HomePage" element={<HomePage />}/>
</Routes>
<Routes>
  <Route  path="/Movies" element={<Movies/>}/>
</Routes>
<Routes>
  <Route  path="/AddMovie" element={<AddMovie/>}/>
</Routes>
<Routes>
  <Route  path="/Subscriptions" element={<Subscriptions/>}/>
</Routes>

<Routes>
  <Route   path="/EditMovie/:id" element={<EditMovie/>}/>
</Routes>
<Routes>
  <Route  path="/AllMembers" element={<AllMembers />}/>
</Routes>
<Routes>
  <Route  path="/EditMember/:id" element={<EditMember/>}/>
</Routes>
<Routes>
  <Route  path="/AddMember" element={<AddMember/>}/>
</Routes>
<Outlet/>

    </div>}

export default Login
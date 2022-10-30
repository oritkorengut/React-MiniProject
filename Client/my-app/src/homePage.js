import {Link,Route,Routes} from "react-router-dom"

import { Outlet,useNavigate} from "react-router-dom";
import { useState,useEffect } from "react"
import axios from "axios"

function HomePage(){
   const navigate=useNavigate()
   const [movies, setMovies] = useState([])
useEffect(()=>{
    const All = async () => {

        let {data} = await axios.get("http://localhost:8011/api/movies")
        
        setMovies(data)}
        All()},[])
return(
    <div style={{ backgroundColor:"lavender" }}><h4> Name :{sessionStorage.getItem("username")}</h4><br/>
<input type="button" value="Movies" onClick={() => navigate('/Movies')}/>
<button onClick={() => navigate('/Subscriptions')}>Subscriptions  </button>



<Outlet/>

</div>)
}
export default HomePage 

import { Routes,Route } from "react-router-dom";
import { useState } from "react";
import { useNavigate,Outlet,Link } from "react-router-dom";
import MoviesWatched from "./moviesWatched"
import axios from "axios";
import EditMember from "./EditMember";
function ChildAllmember(props){
  const navigate=useNavigate()

  const deleteMovie = async () => {

    const status = await axios.delete(`http://localhost:8011/api/members/`+props.member._id)
    const status1 = await axios.get(`http://localhost:8011/api/subs`)
    let arr =status1.data.filter(i=>{
      
     return  i.MemberID==props.member._id
     })
     arr.forEach(async (s)=>{
      await axios.delete(`http://localhost:8011/api/subs/`+s._id)

     })

    console.log(status)
}


    return(<div style={{ "border": "3px solid lightpink" }}>


   <h1>{props.member.Name}</h1><br/>
   Email: <span >{props.member.Email}</span><br/>
   City: <span >{props.member.City}</span><br/>  

   <button onClick={() => navigate('/EditMember/'+props.member._id)}>EditMember  </button>

    <input type="button" value="delete"onClick={deleteMovie} />
           {<MoviesWatched member={props.member} key={props.index}/>}

    <Routes>
  <Route  path="/EditMember/:id" element={<EditMember/>}/>
</Routes>
<Outlet/>
</div>)
}
export default ChildAllmember


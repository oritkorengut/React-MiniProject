import { useState,useEffect } from "react"
import axios from "axios"
import ChildAllmember from "./ChildAllmember"
import MoviesWatched from "./moviesWatched"
function AllMembers() {
   
    const [members, setMembers] = useState([])
useEffect(()=>{
    const All = async () => {

        let {data} = await axios.get("http://localhost:8011/api/members")
        
        setMembers(data)}
        All()},[])
    
    return     <div style={{ backgroundColor:"lavenderblush" }}>
        <h4> Name :{sessionStorage.getItem("username")}</h4><br/>
        <h1>members </h1>

        {
            members.map((member, index) => {
                return <ChildAllmember member={member} key={index}   />
            })
        } 
 

    </div>

}
export default AllMembers

    


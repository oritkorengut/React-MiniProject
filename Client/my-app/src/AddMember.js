import React from 'react'
import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


function AddMember(){
    const navigate=useNavigate()
    const[member,setMember]=useState()


    const addMember = async () => {
        
        const { data } = await axios.post("http://localhost:8011/api/members", member)
        console.log(data)
    }



return    <div style={{ backgroundColor:"powderblue" }}>
        <h4> Name :{sessionStorage.getItem("username")}</h4><br/>
     Name : <input type="text"  onChange={e => setMember({...member, Name : e.target.value})} />
        email :<input type="text"  onChange={e => setMember({...member, Email : e.target.value})} />
        City : <input type="text" onChange={e => setMember({...member, City : e.target.value})} />
        <button onClick={addMember}>Save</button>
        <input type="button" value="cacnel" onClick={() => navigate('/AllMembers')}/>

</div>
}
export default AddMember
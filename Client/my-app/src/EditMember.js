import { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import AllMembers from "./AllMembers";
function EditMember(){
        const params=useParams()

        const[member,setMember]=useState({id:params.id,Name:"",Email:"",City:""})
        const navigate=useNavigate()        


        const  findMember=async() =>{
                const { data } = await axios.get("http://localhost:8011/api/members");
                let mem = data.find(m => m._id == params.id);
                if (mem) {
                    console.log(mem.Name);
                    setMember(mem);
                }
            }
            useEffect(() => {
               findMember()
            }, [])
        const editMovie = async () =>{
        let {data} = await axios.put("http://localhost:8011/api/members/"+params.id, member);
        setMember(data)
}
  

    
   

    return(<div>
      
      <h4> Name :{sessionStorage.getItem("username")}</h4><br/>
        Name : <input type="text" value={member.Name} onChange={e => setMember({...member, Name : e.target.value})} />
        email :<input type="text" value={member.Email} onChange={e => setMember({...member, Email : e.target.value})} />
        City : <input type="text" value={member.City} onChange={e => setMember({...member, City : e.target.value})} />
        <input type="button" value="update" onClick={editMovie}/>

        <input type="button" value="cacel" onClick={() => navigate('/AllMembers')}/>



 

</div>)

}
export default EditMember



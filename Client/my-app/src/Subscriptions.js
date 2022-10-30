 import { Routes,Route } from "react-router-dom";
import { useNavigate,Outlet,Link } from "react-router-dom";
import AllMembers from "./AllMembers";
import EditMember from "./EditMember";
import AddMember from "./AddMember";

function Subscriptions(){

    const navigate = useNavigate();

return(    <div style={{ backgroundColor:"lightgray" }}>
     
  
 <button onClick={() => navigate('/AllMembers')}>AllMembers  </button>
<input type="button" value="AddMembers" onClick={() => navigate('/AddMember')} />
<Routes>
  <Route  path="/AllMembers" element={<AllMembers />}/>
</Routes>
<Routes>
  <Route  path="/EditMember/:id" element={<EditMember/>}/>
</Routes>
<Routes>
  <Route  path="/AddMember" element={<AddMember/>}/>
</Routes>
<Outlet/></div>)
}
export default Subscriptions
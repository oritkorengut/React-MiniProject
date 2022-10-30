import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


function AddMovie(){
    const[movies,setMovies]=useState({Name:"",YearPremiered:0,Geners:[],AnImageUrl:""})
    const navigate = useNavigate();
    const createMovie = async () =>
  {

    let {data} = await axios.post(`http://localhost:8011/api/movies`, movies);
    console.log(data);
  }
return     <div style={{ backgroundColor:"lightgreen" }}>
        <h4> Name :{sessionStorage.getItem("username")}</h4><br/>
    <input type="button" value="Add" onClick={createMovie}/>
    <input type="button" value="Cancel" onClick={() => navigate('/Movies')}/>

    Name : <input type="text" onChange={e => setMovies({...movies, Name : e.target.value})} />
    Primierd :<input type="text" onChange={e => setMovies({...movies, YearPremiered : e.target.value})} />
    Geners : <input type="text" onChange={e => setMovies({...movies, Geners : e.target.value})} />
    AnImageUrl : <input type="text" onChange={e => setMovies({...movies, AnImageUrl : e.target.value})} />

</div>
}
export default AddMovie
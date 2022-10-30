import {useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

import { Link, Route, Routes } from "react-router-dom";

import Movie from "./Movie"
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";

function Movies(){
const[movie,setMovie]=useState([])
const[findMovies,setfindMovies]=useState()



const [members,setMembers]=useState([])
 const navigate = useNavigate();

    const getMovies=async()=>{
        let {data} = await axios.get("http://localhost:8011/api/movies")
        setMovie(data)
    }
 




const findByName=async()=>{
  const {data}=await axios.get("http://localhost:8011/api/movies/"+findMovies);
  setMovie(data);
  console.log(data);
      }
  
   return    <div style={{ backgroundColor:"lightsteelblue" }}>
    <h4> Name :{sessionStorage.getItem("username")}</h4><br/>
   

<input type="button" onClick={getMovies} value="get movies"/>
<input type="button" value=" AddMovie"  onClick={() => navigate('/AddMovie')}/>

find:<input type="text" id="find"  onChange={(e)=>{setfindMovies(e.target.value)}} />
<input type="button" onClick={findByName} value="find"/>



     <br/>

   



 {
         movie.map((movie , index) =>
         {
           return <Movie key={index} movie={movie}  />
         })
       } 

</div>
}
export default  Movies
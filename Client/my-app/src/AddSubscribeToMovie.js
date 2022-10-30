import axios from 'axios'
import { useState,useEffect } from 'react'
const AddSubscribeToMovie = (props) => {
    const [movies,setMovies]=useState([])
    const [movie,setMovie]=useState({Name:"",Date:""})
    const getAllMovie=async()=>{
        let {data}=await axios.get("http://localhost:8011/api/movies")
        setMovies(data)
    }
    useEffect(()=>{
        getAllMovie()
    },[movies])
    const addMovieToMember=async()=>{
        let {data}=await axios.get("http://localhost:8011/api/movies/"+movie.Name)
        data=data[0]
        let obj= {movieid:data._id,memberid:props.member._id,date:movie.Date}
        const data2=await axios.post("http://localhost:8011/api/subs",obj)
        props.getSubs()
        console.log("ok");
    }
    

  return (
    
    <div style={{ backgroundColor:"lavender" }}>
        <h3>Add a new Movie</h3>

        <select value={movie.Name}onChange={e=>setMovie({...movie,Name:e.target.value})}>
            {
              movies.map((movie,index)=>{
                  return<option key={index} >{movie.Name}</option>
              })
            }
        </select>
        <input type={"date"} onChange={e=>setMovie({...movie,Date:e.target.value})}/><br/>
        <button onClick={addMovieToMember} >Subscribe!!!</button>
        </div>
  )
}

export default AddSubscribeToMovie
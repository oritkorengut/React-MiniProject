import axios from "axios"
import { Outlet,Routes,Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import EditMovie from "./EditMovie"
import MemberWatched from "./MemberWatched"
function Movie(props){
    const navigate=useNavigate()

const deleteMovie = async () => {

    const status = await axios.delete(`http://localhost:8011/api/movies/`+props.movie._id)
    const status1 = await axios.get(`http://localhost:8011/api/subs`)
    let arr =status1.data.filter(i=>{
      
     return  i.MovieID==props.movie._id
     })
     arr.forEach(async (s)=>{
      await axios.delete(`http://localhost:8011/api/subs/`+s._id)

     })

    console.log(status)
}

return<div style={{ "border": "1px solid blue"}}>
<br/>

    Name: <span >{props.movie.Name}</span><br/>
    YearPremiered: <span >{props.movie.YearPremiered}</span><br/>
    Genres: <span >{" "+props.movie.Genres}</span><br/>

            <img src={props.movie.AnImageUrl} /><br/>


            <button onClick={() => navigate("/EditMovie/"+props.movie._id)}>Edit  </button>

            <input type="button" onClick={deleteMovie} value="delete "/>
            {<MemberWatched movie={props.movie} key={props.index}/>}


   <Routes>
  <Route  path="/EditMovie/:id" element={<EditMovie/>}/>
</Routes>
<Outlet/>
     </div>
}
export default Movie;
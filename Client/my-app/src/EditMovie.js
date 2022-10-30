    import { useState } from "react";
    import { useEffect } from "react";
    import axios from "axios";
    import { useNavigate,useParams } from 'react-router-dom'
    function EditMovie(){
    
      const params=useParams()
    
        const[movies,setMovies]=useState({id:params.id,Name:"",YearPremiered:0,Geners:[],AnImageUrl:""})
        const navigate = useNavigate();

        
        const  findMovie=async() =>{
          const { data } = await axios.get("http://localhost:8011/api/movies");
          let mo = data.find(m => m._id == params.id);
          if (mo) {
            // mo = mo.Geners.join('')
              setMovies(mo);
          }
      }
      useEffect(() => {
          findMovie()
      }, [])
        const editMovie = async () =>
      {
        let {data} = await axios.put("http://localhost:8011/api/movies/"+params.id, movies);
      }
    return(<div>
        <h4> Name :{sessionStorage.getItem("username")}</h4><br/>

        Name : <input type="text"value={movies.Name} onChange={e => setMovies({...movies, Name : e.target.value})} />
        Primierd :<input type="text"  value={movies.YearPremiered} onChange={e => setMovies({...movies, YearPremiered : e.target.value})} />
        Geners : <input type="text" value={movies.Geners}onChange={e => setMovies({...movies, Geners : e.target.value})} />
        AnImageUrl : <input type="text"  value={movies.AnImageUrl} onChange={e => setMovies({...movies, AnImageUrl : e.target.value})} />
        <input type="button" value="update" onClick={editMovie}/>
        <input type="button" value="cacel" onClick={() => navigate('/Movies')}/>

       
    </div>)
    }
 
export default EditMovie
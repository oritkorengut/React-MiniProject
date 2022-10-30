
import { useEffect, useState } from "react"
import axios from "axios"
function MemberWatched(props) {


    const [subsWatch, setSubsWatch] = useState([])
     const getSubs = async () => {
      const { data } = await axios.get("http://localhost:8011/api/subs")
      let resp = data.filter(x => x.MovieID == props.movie._id)
  
       const res = await axios.get("http://localhost:8011/api/members")
        let movies = res.data
           if (movies) {
         if (resp) {
            resp = resp.map((m) => {
             let movie = movies.find((y) => m.MemberID == y._id)
             if (movie)
               if (resp)
                 return { 
                  name: movie.Name,
                  data:m.Date}
           })
           setSubsWatch(resp)
  
        }
      }
    }
    useEffect(() => {
      getSubs()
    }, [subsWatch])
  
   

  

               


    return <div style={{ "border": "1px solid red" }}>
                Members Watched<br />   

        <ul>
      {
       subsWatch&& subsWatch.map((item,index) =>
          {
          if(item) return <li key={index}>{item.name}  <br/>{item.data}</li>

          })

      }
    </ul>




    </div>
}
export default MemberWatched
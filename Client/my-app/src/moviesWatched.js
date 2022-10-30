import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import A from "./A"
import AddSubscribeToMovie from "./AddSubscribeToMovie"
function MoviesWatched(props){

  const [isSubscripe, setIsSubscripe] = useState(false)


  const [subsWatch, setSubsWatch] = useState([])



  const getSubs = async () => {
    const { data } = await axios.get("http://localhost:8011/api/subs")
    let resp = data.filter(x => x.MemberID == props.member._id)

    const res = await axios.get("http://localhost:8011/api/movies")
    let movies = res.data
    if (movies) {
      if (resp) {
        resp = resp.map((m) => {
          let movie = movies.find((y) => m.MovieID == y._id)
          if (movie)
            if (resp)
              return { name: movie.Name, data: movie.YearPremiered }
        })
        setSubsWatch(resp)


       

      }
    }
  }
  useEffect(() => {
    getSubs()
  }, [subsWatch])


  const addSubscribe = () => {
    setIsSubscripe(!isSubscripe)
  }



  return (
  <div style={{ "border": "1px solid black" }}>
    Movies Watched<br />
    <button onClick={addSubscribe} >Subscripe to new movie</button>
    <ul>
      {
        subsWatch && subsWatch.map((item, index) => {
            if (item) return <li key={index}> <Link to={"/A" }state={{movie1:item}}  elememt={<A/>}>{item.name} </Link><br/>{item.data}</li>

        })
        }
      {isSubscripe ? <AddSubscribeToMovie member={props.member} getSubs={getSubs} func={props.getmember} /> : null}
      </ul>









  </div>
  )
}

export default MoviesWatched
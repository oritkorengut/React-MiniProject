const express = require('express');
const router=express.Router();
const   MoviesBL = require('../Models/MoviesBL');



const getMovies = async (req, res, next) => {
    const movies = await MoviesBL.getAllMovies()
    console.log("movies: " + movies);
    if (movies.length > 0) {
        console.log("alread exist");
        next()
    } else {
        await MoviesBL.getFromJsonToDB()
        next()
    }

}
router.get('/', async function (req, res) {
    let data = await MoviesBL.getAllMovies();
    return res.status(200).json(data);

})
 
// router.get('/:name',getMovies, async function (req, res) {
//     let data = await MoviesBL.getAllMovies();
//     return res.status(200).json(data);

// })
 
router.get("/:name",async function (req, res) {   
    let name=req.params.name;
    let movie=await MoviesBL.getMovies(name);
    res.json(movie);
    // res.status(500).json({ msg: err })
})

router.post("/", async function (req, res) {
    let movies = req.body
    await MoviesBL.addMovies(movies)
    res.send("created")
})

   
router.put("/:id", async function (req, res) {
    const id = req.params.id
    const movie = req.body

    const status = await MoviesBL.updateMovie(id, movie)

    res.status(200).json({ msg: status })
})
    router.route('/:id')
    .delete( function(req,resp)
    {
        let id = req.params.id;

        MoviesBL.deleteProduct(id).then(status =>
            {
                return resp.json(status);
            })
    })

    module.exports = router;
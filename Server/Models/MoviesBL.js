 const MoviesModel=require("./MoviesModel")

 const jFile = require("jsonfile")
 const path = require("path")
 const jsonFile = path.join(__dirname, "../shows.json")
 

 const getFromJsonToDB = () => {
    const movies = new Promise((res, rej) => {
        jFile.readFile(jsonFile, (err, data) => {
            if (err) {
                rej(err)
            } else {

                data.forEach(movie => {
                    let newMovie = new MoviesModel({
                        Name: movie.name,
                        YearPremiered: movie.premiered.slice(0, 4),
                        Genres: movie.genres,
                        AnImageUrl:movie.image.medium
                    })
                    newMovie.save(e => {
                        if (e) console.log(e); else {
                            console.log(" 😁😁");
                            res(newMovie)
                        }
                    })
                });
            }
        })

    })

}
 const getAllMovies=function(){
 return new Promise((resolve, reject) => { 
    MoviesModel.find({},function(err,data){
        if(err){
            reject(err);
        }
        else{   
            resolve(data);
        }
    })
  })

 }



const getMovies=(name)=>{
    return new Promise((resolve,reject)=>{
      MoviesModel.find({Name:name},(err,movie)=>{
      if(err){
        reject(err)
      }
      else{
        resolve(movie)
      }
    })
  })
}  
 const addMovies = function(obj)
{
    return new Promise((resolve,reject) =>
    {
        let movs = new MoviesModel({
            Name : obj.Name,
            YearPremiered : obj.YearPremiered,
            Genres : obj.Genres,
            AnImageUrl : obj.AnImageUrl
        });
    
        movs.save(function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Created');
            }
        })
    });
}
const deleteProduct = function(id)
{
    return new Promise((resolve,reject) =>
    {
        MoviesModel.findByIdAndDelete(id, function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve('Deleted !');
                }
            })
    });
}
const updateMovie = (id, movie) => {
    return new Promise((resolve, reject) => {
        MoviesModel.findByIdAndUpdate(id, movie, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Updated")
            }
        })
    })
}
  
 module.exports ={getAllMovies,getFromJsonToDB,getMovies,addMovies,deleteProduct,updateMovie}


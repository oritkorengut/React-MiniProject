const express=require("express")
var cors=require("cors")

const app= express()
const moviesRouter = require('./Routes/moviesRouter');
const usersRouter = require('./Routes/usersRouter');
const membersRouter = require('./Routes/membersRouter');
const subsRouter = require('./Routes/subsRouter');




app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}));

require('./configs/database');


app.use('/api/movies',moviesRouter);
app.use('/api/users',usersRouter);
app.use('/api/members',membersRouter);
app.use('/api/subs',subsRouter);



app.listen(8011,()=>{
    console.log("hi we listen to port 8011")
})

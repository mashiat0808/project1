const express = require('express')
const app = express()
const cors= require('cors')

app.use(express.json());
app.use(cors());

const db= require('./models')


//routers
const postRouter= require('./routes/posts')
app.use("/posts", postRouter)


db.sequelize.sync().then(()=>{
    app.listen(3001,()=> {
        console.log("server listening on 3001");

    });
});





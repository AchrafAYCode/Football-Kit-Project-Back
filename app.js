const express=require('express');
const mongoose=require('mongoose');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const categorieRouter =require("./routes/categorie.route")
const articleRouter =require("./routes/article.route")
const userRouter = require("./routes/user.route")


dotenv.config()

app.use(cors())

app.use(express.json());

app.use('/api/categories', categorieRouter);
app.use('/api/articles', articleRouter);



app.get('/', (req, res) =>{
    res.send("hello world !! ");
});



app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`); });
    module.exports = app;

mongoose.connect(process.env.DATABASE)
.then (()=>{ console.log("DataBase Successfully Connected") ;
}).catch(err=>{
    console.log('unable to connect to data base',err);
    process.exit();
}); 

app.use('/api/users', userRouter);

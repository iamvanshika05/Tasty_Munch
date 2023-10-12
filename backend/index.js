const express = require('express')
const app = express()
const port = 8000;
const connectDB = require("./db")


app.use((req,res,next)=>{
    res.setHeader("Allow-Control-Allow-Origin","http://localhost:3000");
    res.header("Allow-Control-Allow-Headers",
    "Origin, X-Requested-With ,Content-Type, Accept" );
    next();
})


app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
}) 
const express = require('express')
const bodyParser = require('body-parser')  // For posting the data
const userRoutes = require('./routes/users.js')
const app = express()

app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send("Home Page made easy by me")
})
// Routes
app.use('/users',userRoutes)
app.listen(5000,()=>{
    console.log(`The server is running on port http://localhost:${5000}`);
})
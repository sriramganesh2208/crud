const express= require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const router = require("./routes/crudRoutes")

const app = express()

//middleware
app.use(cors())
app.use(express.json())
 
app.use("/api",router) 




app.listen(3000, () => {
    console.log("Server is Running");
})
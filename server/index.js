const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");


mongoose.connect('mongodb+srv://Alexandergmt:Kingdomhearts93@mydb.ifnilwj.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB is  connected successfully"))
.catch((err) => console.error(err));


app.listen(4000, () => {
    console.log('server started on 4000')
})

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
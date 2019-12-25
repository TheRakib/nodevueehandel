const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan= require("morgan");
const config = require("./config/config");
const {sequelize} = require("./models/index")
const app = express();
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

require("./routes")(app)

sequelize.sync().then(()=>{
app.listen(config.port)
console.log("listening to port " + config.port)
})

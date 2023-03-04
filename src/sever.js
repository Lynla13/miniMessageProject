import express from "express";
import configViewEngine from "./configs/view_engine";
import initWebRouter from "./router/web";
import bodyParser from "body-parser";
import session from "express-session";
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8081;

app.use(bodyParser.json({limit: "50mb"}));

app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(bodyParser.urlencoded({ extended: true })); 

//Cònig session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

//setup viewengine
configViewEngine(app);

// init webRouter
initWebRouter(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
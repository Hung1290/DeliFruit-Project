import express from "express"
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"
import initApiRoutes from "./routes/api"
import connection from './config/connectDB'
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import configCors from "./config/cors"
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 8080

//config cors
configCors(app)

//config view engine
configViewEngine(app)

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config cookie-parser
app.use(cookieParser())

//init web routes
initWebRoutes(app)
initApiRoutes(app)

app.use((req, res) => {
    return res.send('404 not found')
})

//test connect DB
connection()

app.listen(PORT, () => {
    console.log("jwt backend is running on the port = " + PORT)
})
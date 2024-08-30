import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:true}))
app.use(express.static("public"))
app.use(cookieParser())

//routes imports
import userRouter from "./routes/user.routes.js"

//routes decleration
app.use("/api/v1/user", userRouter)//when user goes to /user then control goes to userRouter

export {app}
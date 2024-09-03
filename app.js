import express from "express";
import cors from "cors"
import { config } from "dotenv";
import courseRoutes from "./routes/courseRoutes.js"
import ErrorMiddleware from "./middlewares/Error.js";
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";
import Dashboard from "./routes/Dashboard.js"
import PaymentRoute from "./routes/PaymentRoute.js"
config({
  path:"./Config/config.env"
})
  const app=express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods:["GET","POST","PUT","DELETE"]
  }))
  app.use(express.urlencoded({
    extended:true,
  }))
  
  app.use("/api/v1",courseRoutes)
  app.use("/api/v1",userRoutes)
  app.use("/api/v1",PaymentRoute)
  app.use("/api/v1",Dashboard)
//  app.use(cors());
export default app
app.use(ErrorMiddleware)
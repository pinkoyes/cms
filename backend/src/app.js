import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}

const app = express();
app.use(express.json({ limit: "30kb" }))
app.use(express.urlencoded({ extended: true, limit: "30kb" }))
app.use(cors(corsOptions))
app.use(cookieParser())


export default app;
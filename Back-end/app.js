import express, {json} from 'express'
import cookieParser from 'cookie-parser'; 
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import path from "path";
import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import connectDB from "./db/mongodbconnection.js";
import userRoute from "./routes/userRoute.js"

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:3000",  
  "https://my-chat-app-prod.onrender.com",  
];




const __dirname = path.resolve();

connectDB(); 

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);












app.use(cookieParser());
app.use(json());


app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON:', err.message);
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }
  next();
});


app.use("/api", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/Front-end/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "Front-end", "dist", "index.html"));
});


app.get("/", (req, res) => {
  res.send("Hey there, I am running on your end!");
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong', details: err.message });
});

app.listen(PORT, () => {
  console.log(`This server is running on port ${PORT}`);
});

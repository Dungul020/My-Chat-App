import express, {json} from 'express'
import dotenv from "dotenv";
dotenv.config();
const app = express();
import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import connectDB from "./db/mongodbconnection.js";
import userRoute from "./routes/userRoute.js"

const PORT = process.env.PORT || 5000;

connectDB(); // Make sure the DB connection is established before starting the server

app.use(json()); // Parsing JSON

// Handle invalid JSON requests
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON:', err.message);
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }
  next();
});

// Routes
app.use("/api", authRoute);
app.use("/messages", messageRoute);
app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hey there, I am running on your end!");
});

// Error handling middleware for 500 server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong', details: err.message });
});

app.listen(PORT, () => {
  console.log(`This server is running on port ${PORT}`);
});

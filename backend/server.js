import express from "express";
import dotenv from "dotenv";
import dbConnect from "./database/dbConnect.js";
import authRoutes from "./routes/auth.routes.js";

const port = process.env.PORT || 5000;
const app = express();
dotenv.config();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  dbConnect();
  console.log(`Server is running at http://localhost:${port}`);
});

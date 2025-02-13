import express from "express";
import dotenv from "dotenv";
import dbConnect from "./database/dbConnect.js";
import authRoutes from "./routes/auth.routes.js";
import foodRoutes from "./routes/cake.routes.js";


const port = process.env.PORT || 4000;
const app = express();
dotenv.config();
app.use(express.json());
app.use("/images", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/cake", foodRoutes);


app.listen(port, () => {
  dbConnect();
  console.log(`Server is running at http://localhost:${port}`);
});

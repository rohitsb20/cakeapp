import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log("MongoDB connection FAIL");
  }
};

export default dbConnect;

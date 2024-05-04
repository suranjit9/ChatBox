import mongoose from "mongoose";

let isConnect = false;
const connectDB = async () => {
  if (isConnect) {
    console.log("Database is alredy connected");
    return isConnect;
  }
  try {
    const res = await mongoose.connect(process.env.MONGODB_URI as string);
    isConnect = res.connection.readyState === 1;
    console.log("Successfully connected to MongoDB");
    return isConnect;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

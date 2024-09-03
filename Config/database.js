import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect("mongodb+srv://rrajput2060:Kq3NITgS3dVcVHQs@cluster0.oa0fm.mongodb.net/courseBit");
  console.log(`MongoDB connected with ${connection.host}`);
  } catch (error) {
    console.log(error)
  }
};



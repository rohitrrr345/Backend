import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect("mongodb+srv://rohit:Rohit@5698@cluster0.3yt0s.mongodb.net/Amazon?retryWrites=true");
  console.log(`MongoDB connected with ${connection.host}`);
  } catch (error) {
    console.log(error)
  }
};



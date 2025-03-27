import mongoose from "mongoose";

const connectDB = async () => {
  // try {
  //     await mongoose.connect(process.env.MONGODB_URI,{});
  //     console.log("MongoDB DATABASE CONNECETED");

  // } catch (error) {
  //     console.log("MongoDB connection failed:",error.message);
  //     process.exit(1);

  // }
  try {
    mongoose.connection.on("connected", () =>
      console.log("Connected to MongoDB")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;

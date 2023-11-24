import mongoose from "mongoose";
import Dotenv from "dotenv";
Dotenv.config();

const Connection = async () => {
  try {
    const url =
      "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2";

    await mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => console.log("Database connected!"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("Error while connecting ", error);
  }
};

export default Connection;

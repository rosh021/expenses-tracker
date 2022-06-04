import mongoose from "mongoose";

const createConnection = () => {
  const contStr = process.env.MONGO_URL;

  try {
    const connect = mongoose.connect(contStr);
    connect && console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default createConnection;

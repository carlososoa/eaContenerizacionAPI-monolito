import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.MONGODB);



export const connectDB = async () => {
  try {
    const url = process.env.MONGODB

    await mongoose.connect(url)
    console.log('DB Conexion Exitosa')
  } catch (error) {
    console.log(error)
  }
}


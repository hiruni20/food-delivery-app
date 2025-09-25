import mongoose from "mongoose"

export const connectDB = async () => {
   await mongoose .connect('mongodb+srv://hiruni:205084@cluster0.0dkaddo.mongodb.net/food_del').then(()=>console.log("DB connected"));
}
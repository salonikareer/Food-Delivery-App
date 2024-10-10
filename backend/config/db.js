import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://saloni:foodapp1234@cluster0.heibdvy.mongodb.net/food-del`).then(()=>console.log("db connected")).catch((err)=>console.log(err));
}
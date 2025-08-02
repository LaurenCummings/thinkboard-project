import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://laurencummings7:IaH6mBAbQIink9yg@cluster0.yddm3b0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MONGODB CONNECTED");
    } catch(error) {

    }
}
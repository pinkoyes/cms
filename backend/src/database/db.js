import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

async function connectDB() {
    try {
        console.log("Connecting to database...");
        const connectionInstance = await mongoose.connect(`${process.env.CONNECTION_STRING}/${DATABASE_NAME}`);
        console.log(`Connect to database successfully! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to database", error);
        process.exit(1);
    }
}

export default connectDB;
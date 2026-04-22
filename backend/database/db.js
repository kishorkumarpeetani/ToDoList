import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if(!DB_URI){
    throw new Error("DB_URI not found");
}

async function connectToDB(){
    try{
        await mongoose.connect(DB_URI);
        console.log("DB Connected successfully");
    }
    catch(error){
        console.error("Error connecting to DB", error);
        process.exit(1);
    }
}

export default connectToDB;
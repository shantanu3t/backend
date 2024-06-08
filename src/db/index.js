import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async()=>{
    try{
        await mongoose.connect(`$(process.env.MONGODB_URI)/${DB_NAME}`)
        console.log(`Mongo DB connected!! DB HOST: ${connectionInstance.connection.host}`)
    }catch(error){
        console.error("Mongo DB connection error: ", error)
        process.exit(1)
    }
}


export default connectDB;
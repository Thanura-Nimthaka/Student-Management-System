import mongoose from "mongoose";
import dotnev from 'dotenv'
dotnev.config()

const Connection = async () => {
    try{
        mongoose.connect(process.env.URL)
        console.log("Succesfully Connected")
    }
    catch(err) {
        console.log("Error : " + err)
    }
}

Connection ()

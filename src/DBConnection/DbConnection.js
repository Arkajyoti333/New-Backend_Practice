import mongoose from "mongoose";
import { Db_name } from "../constant.js";
import EnvConfig from "../config/config.js";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env",
});




const DataBaseConnecton=async()=>{
  try {
    const DbConnection=await mongoose.connect(`${EnvConfig.Mongodb_URI}/${Db_name}`);
    //Dont use special character in mongo db string password if use make sure this special character is encoded in base64.
   
    const hostId=DbConnection.connection.host;
    console.log(`Your Mongodb Connecton Host Id is -> ${hostId}`);
    

  } catch (error) {
     console.error("Mongodb Connection Faield ! in DbConnection...: ",error);
     
     process.exit(1);
  }
    
}


export default DataBaseConnecton;
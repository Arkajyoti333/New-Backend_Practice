import DataBaseConnecton from "./DBConnection/DbConnection.js";
import app from "./app.js";
import EnvConfig from "./config/config.js";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env",
});
import { Constant_Server_Port } from "./constant.js";

const port=EnvConfig.EnvPort || Constant_Server_Port;
 
console.log(port);



DataBaseConnecton()
.then(()=>{
     app.on('error',(error)=>{
        console.log("Mongodb server error in app On",error);
         throw error;
         
     })
  app.listen(port,()=>{
    console.log(`Server is listen on Port :${port}`);
    
  })
      
})
.catch((Error)=>{
    console.log("Mongodb connection Error ! in index...",Error);
    throw Error;
})



import dotenv from "dotenv";
dotenv.config({
    path:"./.env",
});


const ___EnvConfig={
    EnvPort:process.env.PORT,
    Mongodb_URI:process.env.MONGODB_STRING,
    Cors_Origin:process.env.CORS_ORIGIN,
}

const EnvConfig=Object.freeze(___EnvConfig);


export default EnvConfig;
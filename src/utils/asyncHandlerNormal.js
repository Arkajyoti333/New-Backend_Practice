

const asyncHandlerNormal= (requestHandler)=>{
   async (error,req,res,next)=>{
          try {
            await requestHandler(error,req,res,next);
          } catch (error) {
            
            res.status(error.code || 500).json({
                success:false,
                message:error.message,
            })
  
          }
    }
}


export default asyncHandlerNormal;
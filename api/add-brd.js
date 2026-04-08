const pool = require("./db");

module.exports = async (req,res)=>{

 if(req.method !== "POST"){
   return res.status(405).json({error:"Method not allowed"});
 }

 const {module,brd_ref,status} = req.body;

 try{
   await pool.query(
     "INSERT INTO brds(module,brd_ref,uat_status) VALUES($1,$2,$3)",
     [module,brd_ref,status]
   );

   res.json({success:true});
 }catch(e){
   res.status(500).json({error:e.message});
 }

}
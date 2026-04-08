const pool = require("./db");

module.exports = async (req,res)=>{

 if(req.method !== "POST"){
  return res.status(405).send("Method Not Allowed");
 }

 const {email,password} = req.body;

 try{

 const result = await pool.query(
 "SELECT * FROM users WHERE email=$1 AND password=$2",
 [email,password]
 );

 if(result.rows.length === 0){
  return res.status(401).json({success:false,message:"Invalid login"});
 }

 res.json({success:true});

 }catch(err){

 res.status(500).json({error:err.message});

 }

}
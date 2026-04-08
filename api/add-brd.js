const pool=require("./db");

module.exports=async(req,res)=>{

const {module,brd_ref,status}=req.body;

await pool.query(

"INSERT INTO brds(module,brd_ref,uat_status) VALUES($1,$2,$3)",
[module,brd_ref,status]

);

res.json({success:true});

}
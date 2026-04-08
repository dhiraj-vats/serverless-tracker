const pool=require("./db");

module.exports=async(req,res)=>{

const brd_id=req.query.brd_id;

const result=await pool.query(

"SELECT * FROM issues WHERE brd_id=$1",
[brd_id]

);

res.json(result.rows);

}
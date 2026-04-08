const pool = require("./db");

module.exports = async (req,res)=>{

 const brd_id = req.query.brd_id;

 try{
   const result = await pool.query(
     "SELECT * FROM issues WHERE brd_id=$1 ORDER BY id",
     [brd_id]
   );

   res.json(result.rows);
 }catch(e){
   res.status(500).json({error:e.message});
 }

}
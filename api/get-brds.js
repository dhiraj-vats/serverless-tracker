const pool = require("./db");

module.exports = async (req,res)=>{
 try{
   const result = await pool.query("SELECT * FROM brds ORDER BY id DESC");
   res.status(200).json(result.rows);
 }catch(e){
   res.status(500).json({error:e.message});
 }
}
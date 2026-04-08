const pool = require("./db");

module.exports = async (req,res)=>{

 const {id,module,brd_ref,status} = req.body;

 await pool.query(
 "UPDATE brds SET module=$1, brd_ref=$2, uat_status=$3 WHERE id=$4",
 [module,brd_ref,status,id]
 );

 res.json({success:true});

}
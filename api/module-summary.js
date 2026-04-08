const pool=require("./db");

module.exports=async(req,res)=>{

const result=await pool.query(`

SELECT
module,
COUNT(*) total_brd,
COUNT(*) FILTER (WHERE uat_status='Fully Closed') closed,
COUNT(*) FILTER (WHERE uat_status!='Fully Closed') pending
FROM brds
GROUP BY module
ORDER BY module

`);

res.json(result.rows);

}
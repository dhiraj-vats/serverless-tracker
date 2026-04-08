const pool=require("./db");

module.exports=async(req,res)=>{

const module=req.query.module;

const result=await pool.query(`

SELECT 
b.id,
b.brd_ref,
b.uat_status,

COUNT(i.id) total_issues,

COUNT(*) FILTER (WHERE i.issue_status='Pending') pending,

COUNT(*) FILTER (WHERE i.issue_status='Open') open,

COUNT(*) FILTER (WHERE i.issue_status='In Progress') in_progress,

COUNT(*) FILTER (WHERE i.issue_status='Fixed') fixed

FROM brds b

LEFT JOIN issues i
ON b.id=i.brd_id

WHERE b.module=$1

GROUP BY b.id

ORDER BY b.brd_ref

`,[module]);

res.json(result.rows);

}
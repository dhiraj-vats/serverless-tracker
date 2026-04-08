const pool = require("./db");

module.exports = async (req,res)=>{

 if(req.method !== "POST"){
   return res.status(405).json({error:"Method not allowed"});
 }

 const {brd_id,issues} = req.body;

 try{

   await pool.query("DELETE FROM issues WHERE brd_id=$1",[brd_id]);

   for(const issue of issues){

     await pool.query(
       "INSERT INTO issues(brd_id,issue_title,assignee,issue_status) VALUES($1,$2,$3,$4)",
       [brd_id,issue.title,issue.assignee,issue.status]
     );

   }

   res.json({success:true});

 }catch(e){
   res.status(500).json({error:e.message});
 }

}
const pool = require("./db");

module.exports = async (req, res) => {

const { brd_id, issues, editMode } = req.body;

try {

if(editMode){

// EDIT SINGLE ISSUE

const i = issues[0];

await pool.query(

`UPDATE issues
SET issue_title=$1,
assignee=$2,
issue_status=$3
WHERE id=$4`,

[i.title, i.assignee, i.status, i.id]

);

}else{

// ADD MULTIPLE ISSUES

for(const i of issues){

await pool.query(

`INSERT INTO issues
(brd_id, issue_title, assignee, issue_status)
VALUES ($1,$2,$3,$4)`,

[brd_id, i.title, i.assignee, i.status]

);

}

}

res.json({success:true});

}catch(err){

console.log(err);

res.status(500).json({error:"DB error"});

}

};
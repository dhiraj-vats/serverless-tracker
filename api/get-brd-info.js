const pool = require("./db");

module.exports = async (req, res) => {

const brd_id = req.query.brd_id;

const result = await pool.query(

"SELECT module, brd_ref FROM brds WHERE id=$1",
[brd_id]

);

res.json(result.rows[0]);

};
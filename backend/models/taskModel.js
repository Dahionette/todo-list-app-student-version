const db = require("../db");

//This sends  a request and a reponse or ypu to input your tasks 
const getTasks = async () => {
  const res = await db.query(
    //correct this SQL query to select all tasks from the database
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );
  return res.rows;
};

//This code inserts the title and decription of the tasks you added.
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };

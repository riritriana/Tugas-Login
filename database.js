import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  database: "login2",
});

const conn = await pool.getConnection();
console.log("The database has been connected");

export default conn;
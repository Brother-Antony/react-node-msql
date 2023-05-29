import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3308",
    password: "",
    // password: process.env.DB_KEY,
    database: "blog"
})
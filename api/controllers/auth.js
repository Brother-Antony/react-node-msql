import { db } from "../db.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = (req, res) => {
  // res.json("From controller")
  
  //CHECK EXISTING USER
  const q = 'SELECT * FROM users WHERE email = ? OR username = ?';
    
  // db.connect(function(error) {
  //   if (error) {
  //     console.error("Error al conectar a la base de datos:", error);
  //     return;
  //   }
  //   console.log("Conexion exitosa a la base de datos.");
  // });

  // db.query('SELECT * FROM users', (error, results, fields) => {
  //   if (error) {
  //     console.error('Error al obtener los registros de users:', error);
  //     res.status(500).json({ error: 'Error al obtener los registros de users' });
  //   } else {
  //     res.json(results)
  //     // res.json({ message: 'From controller', results });
  //   }
  // });

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
}

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?"

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err)
    if (data.length === 0) return res.status(404).json("User not found!")

    // Check password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)

    if (!isPasswordCorrect) return res.status(400).json("Wrong username or password!")

    const token = jwt.sign({ id: data[0].id }, "jwtkey")
    const { password, ...other } = data[0]

    // console.log(req)

    res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json(other)
  })
}

export const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User has been logged out.")
}

// __cf_bm
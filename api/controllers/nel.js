import { db } from "../db.js"
// import bcrypt from "bcryptjs"

export const registerOther = (req, res) => {
    res.json("From controller")
    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
    
    db.connect(function(error) {
      if (error) {
        console.error("Error al conectar a la base de datos:", error);
        return;
      }
      console.log("Conexion exitosa a la base de datos.");
    });
  
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        // res.json(err)
        // if (err) return res.status(500).json(err);
        // if (data.length) return res.status(409).json("User already exists!");
  
        // //Hash the password and create a user
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(req.body.password, salt);
  
        // const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
        // const values = [req.body.username, req.body.email, hash];
  
        // db.query(q, [values], (err, data) => {
        //     if (err) return res.status(500).json(err);
        //     return res.status(200).json("User has been created.");
        // });
    });
}

export const login = (req, res) => {}
export const logout = (req, res) => {}
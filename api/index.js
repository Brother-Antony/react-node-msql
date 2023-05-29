import express from "express"
import cors from "cors";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser";

// const cookieParser = require("cookie-parser");

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    // Puedes agregar más orígenes permitidos aquí
  })
);
app.use(express.json())
app.use(cookieParser())

// app.get('/', (req, res) => {
//   res.cookie('miCookie', 'Mi valor de cookie', { path: '/ruta-especifica' });
//   res.send('Cookie agregada');
// });

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.listen(8800, () => {
  console.log("Connected!")
})
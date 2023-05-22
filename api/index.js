import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import nelRoutes from "./routes/nels.js"

const app = express()

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/nels", nelRoutes)

app.listen(8800, () => {
    console.log("Connected!")
})
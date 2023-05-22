import express from "express"
import { registerOther } from "../controllers/nel.js"

const router = express.Router()

router.get("/test", registerOther)

export default router
import { Router } from "express";
import { getData } from "../controllers/db.controller.js";

const router = Router();

router.route("/api").get(getData);

export default router;
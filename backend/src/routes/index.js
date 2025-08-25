import { Router } from "express";
import clients from "./clients.js";
import sessions from "./sessions.js";

const router = Router();

router.use("/clients", clients);
router.use("/sessions", sessions);

export default router;

import { Router } from "express";
import { login } from "../controllers/auth.controller";

const router = Router();

router.post("/login", login);

export default router;

// update 2020-01-05 commit 1

// update 2020-01-05 commit 3

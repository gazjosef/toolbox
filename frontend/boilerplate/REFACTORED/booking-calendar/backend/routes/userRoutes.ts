import { Router } from "express";
import { registerUser, loginUser, getMe } from "../controllers/userController";
import { protect } from "../middleware/authMiddleware";

const router: Router = Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export default router;

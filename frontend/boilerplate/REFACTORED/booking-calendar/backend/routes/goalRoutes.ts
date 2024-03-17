import { Router } from "express";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalController";

const router: Router = Router();

router.get("/", getGoals);

router.post("/", setGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

export default router;

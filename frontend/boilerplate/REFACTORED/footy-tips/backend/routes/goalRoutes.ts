import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Get goal" });
});

router.post("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Create goal" });
});

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update goal ${id}` });
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Delete goal ${id}` });
});

export default router;

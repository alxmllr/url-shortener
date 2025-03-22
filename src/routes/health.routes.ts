import express from "express";
import healthController from "../controllers/health.controller";

const router = express.Router();

router.get("/hello", healthController.sayHello);

export default router;

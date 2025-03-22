import express from 'express';
import healthController from '../controllers/health.controller';

const router = express.Router();

router.get('/hello', (req, res) => {
  void healthController.sayHello(req, res);
});

export default router;

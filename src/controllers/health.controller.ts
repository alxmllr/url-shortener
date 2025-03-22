import { Request, Response } from 'express';
import healthService from '../services/health.service';
import { IHealthController } from '../types';

const healthController: IHealthController = {
  sayHello: async (req: Request, res: Response): Promise<void> => {
    try {
      const message = await healthService.getHelloMessage();
      res.json({ message });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

export default healthController;

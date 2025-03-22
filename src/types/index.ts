import { Request, Response } from "express";

export interface IHealthService {
  getHelloMessage(): Promise<string>;
}

export interface IHealthController {
  sayHello(req: Request, res: Response): Promise<void>;
}

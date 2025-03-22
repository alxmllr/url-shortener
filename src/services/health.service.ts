import { IHealthService } from '../types';

const healthService: IHealthService = {
  getHelloMessage: async (): Promise<string> => {
    // Simulating an async operation
    await new Promise((resolve) => setTimeout(resolve, 100));
    return 'Hello World';
  },
};

export default healthService;

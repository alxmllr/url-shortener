import { IHealthService } from "../types";

const healthService: IHealthService = {
  getHelloMessage: async (): Promise<string> => {
    return "Hello World";
  },
};

export default healthService;

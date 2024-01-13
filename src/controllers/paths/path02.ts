import { Path02Service } from "../../services/paths/path02";

export const Path02Controller = async (req: any, res: any) => {

  const serviceResult = await Path02Service();

  return res
    .status(serviceResult.code)
    .send(serviceResult.result || serviceResult.message);
};

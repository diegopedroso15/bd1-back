import { Path04Service } from "../../services/paths/path04";

export const Path04Controller = async (req: any, res: any) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send("Missing name");
  }

  const serviceResult = await Path04Service(name);

  return res
    .status(serviceResult.code)
    .send(serviceResult.result || serviceResult.message);
};

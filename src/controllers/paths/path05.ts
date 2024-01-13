import { Path05Service } from "../../services/paths/path05";

export const Path05Controller = async (req: any, res: any) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send("Missing name");
  }

  const serviceResult = await Path05Service(name);

  return res
    .status(serviceResult.code)
    .send(serviceResult.result || serviceResult.message);
};

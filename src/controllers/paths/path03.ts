import { Path03Service } from "../../services/paths/path03";

export const Path03Controller = async (_req: any, res: any) => {
  try {
    const serviceResult = await Path03Service();
    return res
      .status(serviceResult.code)
      .send(serviceResult.result || serviceResult.message);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};

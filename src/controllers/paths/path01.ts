import { Request, Response } from "express";
import { Path01Service } from "../../services/paths/path01";

export const Path01Controller = async (
  req: Request,
  res: Response
) => {

  const serviceResult = await Path01Service();

  return res.status(serviceResult.code).send(serviceResult.result || serviceResult.message);
};

import { Request, Response } from "express";
import { query } from "../../services/utils/db-utils";

export const newPremioController = async (
  req: Request,
  res: Response
) => {
  const { premioid, filmeid, nome, tipo } = req.body;

  try {
    const response = await query(
      `
      INSERT INTO premio (premioid, filmeid, nome, tipo)
      VALUES ('${premioid}', '${filmeid}', '${nome}', '${tipo}');
      `
    );

    return res.status(200).send("Premio criado com sucesso");
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

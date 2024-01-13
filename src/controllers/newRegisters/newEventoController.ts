import { Request, Response } from "express";
import { query } from "../../services/utils/db-utils";

export const newEventoController = async (
  req: Request,
  res: Response
) => {
  const { eventoid, nome, anoinic, nacionalidade, tipo } = req.body;

  try {
    const response = await query(
      `
      INSERT INTO eventos (eventoid, nome, anoinicio, nacionalidade, tipo)
      VALUES ('${eventoid}', '${nome}', '${anoinic}', '${nacionalidade}', '${tipo}');
      `
    );

    return res.status(200).send("Evento criado com sucesso");
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

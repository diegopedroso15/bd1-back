import { Request, Response } from "express";
import { query } from "../../services/utils/db-utils";

export const newNominacaoController = async (
  req: Request,
  res: Response
) => {
  const { premioid, filmeid, edicaoid, nominado, vencedor } = req.body;

  try {
    await query(
      `
      INSERT INTO nominacoes (premioid, filmeid, edicaoid, nominado, vencedor)
      VALUES ('${premioid}', '${filmeid}', '${edicaoid}', '${nominado}', '${vencedor}');
      `
    );

    return res.status(200).send("Nominacao criada com sucesso");
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

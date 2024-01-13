import { Request, Response } from "express";
import { query } from "../../services/utils/db-utils";

export const newFilmeController = async (
  req: Request,
  res: Response
) => {
  const { filmeid, titulooriginal, anoproducao, idiomaorig, titulonobrasil, classe, locaisestreio, dataestreio, arrecadacaoprimeiroano } = req.body;

  try {
    await query(
      `
      INSERT INTO filmes (filmeid, titulooriginal, anoproducao, idiomaorig, titulonobrasil, classe, locaisestreio, dataestreio, arrecadacaoprimeiroano)
      VALUES ('${filmeid}', '${titulooriginal}', '${anoproducao}', '${idiomaorig}', '${titulonobrasil}', '${classe}', '${locaisestreio}', '${dataestreio}', '${arrecadacaoprimeiroano}');
      `
    );

    return res.status(200).send("Filme criado com sucesso");
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

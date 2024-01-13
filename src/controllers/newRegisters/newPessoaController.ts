import { Request, Response } from "express";
import { query } from "../../services/utils/db-utils";

export const newPessoaController = async (
  req: Request,
  res: Response
) => {
  const { pessoaid, nomeart, nomeverdadeiro, sexo, anonasc, site, anoinic, situacao } = req.body;

  try {
   await query(
      `
      INSERT INTO public.pessoa (pessoaid, nomeart, nomeverdadeiro, sexo, anonasc, site, anoinic, situacao)
      VALUES  ('${pessoaid}', '${nomeart}', '${nomeverdadeiro}', '${sexo}', '${anonasc}', '${site}', '${anoinic}', '${situacao}');
      `
    );

    return res.status(200).send("Pessoa criada com sucesso");
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

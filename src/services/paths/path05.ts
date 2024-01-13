import { query } from "../utils/db-utils";
import logger from "../../utils/logger/default.logs";

export const Path05Service = async (id: any) => {
  try {
    const response = await query(
      `
    SELECT Pessoa.NomeArt AS NomeAtor, Filmes.TituloNoBrasil, Nominacoes.Nominado, Nominacoes.Vencedor
    FROM Pessoa
    JOIN PapelPessoa ON Pessoa.PessoaID = PapelPessoa.PessoaID
    JOIN Nominacoes ON PapelPessoa.FilmeID = Nominacoes.FilmeID
    JOIN Premio ON Nominacoes.PremioID = Premio.PremioID
    JOIN Filmes ON Nominacoes.FilmeID = Filmes.FilmeID
    WHERE Premio.Nome = '${id}';
    `
    );

    return {
      code: 200,
      result: response,
    };
  } catch (error) {
    logger.error("Server Error:", error);

    return {
      code: 500,
      message: "Server error",
    };
  }
};

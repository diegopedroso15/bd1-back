import { query } from "../utils/db-utils";

export const Path01Service = async () => {
  try {
    const response = await query(`
    SELECT Pessoa.NomeArt, COUNT(Nominacoes.PremioID) AS TotalPremios
    FROM Pessoa
    JOIN PapelPessoa ON Pessoa.PessoaID = PapelPessoa.PessoaID
    JOIN Nominacoes ON PapelPessoa.FilmeID = Nominacoes.FilmeID
    GROUP BY Pessoa.NomeArt
    ORDER BY TotalPremios DESC
    LIMIT 10; 
            `);

    return {
      code: 200,
      result: response,
    };
  } catch (error) {
    return {
      code: 500,
      message: "Server error",
    };
  }
};

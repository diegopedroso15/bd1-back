import logger from "../../utils/logger/default.logs";
import { query } from "../utils/db-utils";

export const Path02Service = async () => {
  try {
    const serviceResult = await query(`
    SELECT Filmes.TituloNoBrasil, COUNT(Nominacoes.FilmeID) AS TotalPremios
    FROM Filmes
    JOIN Nominacoes ON Filmes.FilmeID = Nominacoes.FilmeID
    GROUP BY Filmes.TituloNoBrasil
    ORDER BY TotalPremios DESC
    LIMIT 10;
    `);

    return {
      code: 200,
      result: serviceResult,
    };
  } catch (error) {
    logger.error(error);
    return {
      code: 500,
      message: "Internal server error",
    };
  }
};

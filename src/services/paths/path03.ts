import { query } from "../utils/db-utils";

export const Path03Service = async () => {

  try {
    const response = await query(`
    SELECT TituloNoBrasil, ArrecadacaoPrimeiroAno
    FROM Filmes
    ORDER BY ArrecadacaoPrimeiroAno DESC
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

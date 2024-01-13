import { AppDataSource } from "../../data-source";
import logger from "../../utils/logger/default.logs";

export const query = async (query: string, params?: any[]) => {
    try {
        if (params) {
            return await AppDataSource.query(query, params);
        } else {
            return await AppDataSource.query(query);
        }
    } catch (error: any) {
        logger.error("Err in query execution: " + error.message);
        throw new Error("Err in query execution: " + error.message);
    }
}

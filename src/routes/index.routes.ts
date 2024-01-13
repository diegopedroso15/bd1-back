import { Express } from "express";
import cors from "cors";
import pathRoutes from "./path.routes";
import newsRoutes from "./news.routes";

export const appRoutes = (app: Express) => {
  app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));

  app.use("/api", pathRoutes);

  app.use("/api", newsRoutes);
};

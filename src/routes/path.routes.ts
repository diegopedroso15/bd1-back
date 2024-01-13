import { Router } from "express";
import { Path01Controller } from "../controllers/paths/path01";
import { Path03Controller } from "../controllers/paths/path03";
import { Path04Controller } from "../controllers/paths/path04";
import { Path02Controller } from "../controllers/paths/path02";
import path from "path";
import { Path05Controller } from "../controllers/paths/path05";

const pathRoutes = Router();

pathRoutes.get(
    '/path01',
    Path01Controller,
);
pathRoutes.get(
    '/path02',
    Path02Controller,
);
pathRoutes.get(
    '/path03',
    Path03Controller,
);

pathRoutes.get(
    '/path04',
    Path04Controller,
);

pathRoutes.get(
    '/path05',
    Path05Controller,
);



export default pathRoutes;

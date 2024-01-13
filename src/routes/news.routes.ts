import { Router } from "express";
import { newEventoController } from "../controllers/newRegisters/newEventoController";
import { newPessoaController } from "../controllers/newRegisters/newPessoaController";
import { newFilmeController } from "../controllers/newRegisters/newFilmeController";
import { newPremioController } from "../controllers/newRegisters/newPremioController copy";
import { newNominacaoController } from "../controllers/newRegisters/newNominacoesController";

const newsRoutes = Router();

newsRoutes.get(
    '/newEvento',
    newEventoController,
);

newsRoutes.get(
    '/newPessoa',
    newPessoaController,
);

newsRoutes.get(
    '/newFilme',
    newFilmeController,
);

newsRoutes.get(
    '/newPremio',
    newPremioController,
);

newsRoutes.get(
    '/newNominacao',
    newNominacaoController,
);

export default newsRoutes;

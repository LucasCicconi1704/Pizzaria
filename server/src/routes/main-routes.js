const { Router } = require("express");
const mainController = require("../controllers/main-controller");
const mainRouter = Router();


mainRouter.get("/", mainController.index);
mainRouter.get("/menu", mainController.menu);
mainRouter.get("/postres", mainController.postres);
mainRouter.get("/bebidas", mainController.bebidas);

module.exports = mainRouter;

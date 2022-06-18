import { Router } from "express";
import { IngredientsController } from "../controllers/IngredientsController.js";
import loginRequired from "../middlewars/loginRequired.js";
const ingredientsController = new IngredientsController();
const ingredientsRoutes = Router();

import { validateRequest } from "../validators/RequestValidator.js";
import { postIngredientsValidator } from "../validators/ingredients/postIngredientsValidator.js";
import { putIngredientsValidator } from "../validators/ingredients/putIngredientsValidator.js";

//GET
ingredientsRoutes.get("/", ingredientsController.findAll);
ingredientsRoutes.get("/:id", ingredientsController.findById);

//POST
ingredientsRoutes.post("/", validateRequest(postIngredientsValidator), ingredientsController.save);

//PUT
ingredientsRoutes.put("/:id", loginRequired, validateRequest(putIngredientsValidator), ingredientsController.update);

//DELETE
ingredientsRoutes.delete("/:id", loginRequired, ingredientsController.delete);

export { ingredientsRoutes }
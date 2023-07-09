import { Router } from "express";
import { creaTarea, obtenerTareas } from "../controlers/tareas.controllers";

const router = Router();

router.route('/tareas')
    .get(obtenerTareas)
    .post(creaTarea);

export default router;
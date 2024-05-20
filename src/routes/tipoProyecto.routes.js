import { Router } from "express";
import { crearTipo, consultarTipos, actualizarTipo, consultarTipo } from '../controllers/tipoProyecto.controller.js'

const router = Router()


router.post('/tipoProyecto', crearTipo);
router.get('/tipoProyecto', consultarTipos);
router.put('/tipoProyecto/:id', actualizarTipo);
router.get('/tipoProyecto/:id', consultarTipo);


export default router;

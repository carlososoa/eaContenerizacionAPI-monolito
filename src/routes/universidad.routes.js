import { Router } from "express";
import { crearUniversidad, consultarUniversidades, actualizarUniversidad, consultarUniversidad } from '../controllers/universidad.controller.js';

const router = Router();

router.post('/universidad', crearUniversidad);
router.get('/universidad', consultarUniversidades);
router.put('/universidad/:id', actualizarUniversidad);
router.get('/universidad/:id', consultarUniversidad);


export default router;
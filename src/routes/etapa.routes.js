import { Router } from "express";
import { crearEtapa, consultarEtapas, actualizarEtapa, consultarEtapa } from '../controllers/etapa.controller.js'

const router = Router()


router.post('/etapa', crearEtapa);
router.get('/etapa', consultarEtapas);
router.put('/etapa/:id', actualizarEtapa);
router.get('/etapa/:id', consultarEtapa);


export default router;
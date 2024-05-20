import { Router } from "express";
import { crearCliente, consultarClientes, actualizarCliente, consultarCliente } from '../controllers/cliente.controller.js';

const router = Router();


router.post('/cliente', crearCliente);
router.get('/cliente', consultarClientes);
router.put('/cliente/:id', actualizarCliente);
router.get('/cliente/:id', consultarCliente);


export default router;
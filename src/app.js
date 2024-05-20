import express from 'express';
import morgan from 'morgan';
import tipoProyectoRoutes from './routes/tipoProyecto.routes.js';
import clienteRoutes from './routes/cliente.routes.js';
import universidadRoutes from './routes/universidad.routes.js'
import etapaRoutes from './routes/etapa.routes.js'






const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use(tipoProyectoRoutes);
app.use(clienteRoutes);
app.use(universidadRoutes);
app.use(etapaRoutes);


export default app;
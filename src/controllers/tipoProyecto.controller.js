import TipoProyecto from '../models/tipoProyecto.model.js'

export const crearTipo = async (req, res) => {
  const { nombre } = req.body;

  try {

    const newtipoProyecto = new TipoProyecto({
      nombre
    })

    const tipoProyectoGuardado = await newtipoProyecto.save();
    res.json(tipoProyectoGuardado)
  } catch (error) {
    console.log(error);
  }

};

export const consultarTipos = async (req, res) => {

  TipoProyecto
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))

};

export const actualizarTipo = async (req, res) => {


  try {

    let tipoProyecto = await TipoProyecto.findById(req.params.id)
    if (!tipoProyecto) {
      return res.status(400).send('Tipo no existe')
    }

    const existeTipo = await TipoProyecto.findOne({ nombre: req.body.nombre, _id: { $ne: tipoProyecto._id } })
    if (existeTipo) {
      return res.status(400).send('Este Tipo ya existe')
    }

    tipoProyecto.nombre = req.body.nombre

    tipoProyecto = await tipoProyecto.save()

    res.send(tipoProyecto)
    console.log('Tipo actualizado Correctamente')
  } catch (error) {
    console.log(error)
    res.status(500).send('Ocurrio un error al actualizar el tipo')
  }
};

export const consultarTipo = async (req, res) => {
  TipoProyecto
    .findById(req.params.id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
};





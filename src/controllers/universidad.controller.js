import Universidad from '../models/universidad.model.js';

export const crearUniversidad = async (req, res) => {

  const { nombre, direccion, telefono } = req.body;

  try {
    const newUniversidad = new Universidad({
      nombre,
      direccion,
      telefono

    })

    const universidadGuardada = await newUniversidad.save();
    res.json(universidadGuardada)

  } catch (error) {
    console.log(error);

  }

};

export const consultarUniversidades = async (req, res) => {

  Universidad
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))

};

export const actualizarUniversidad = async (req, res) => {


  try {

    let universidad = await Universidad.findById(req.params.id)
    if (!universidad) {
      return res.status(400).send('universidad no existe')
    }

    const existeUniversidad = await Universidad.findOne({ nombre: req.body.nombre, _id: { $ne: universidad._id } })
    if (existeUniversidad) {
      return res.status(400).send('Esta universidad ya existe')
    }

    universidad.nombre = req.body.nombre;
    universidad.direccion = req.body.direccion;
    universidad.telefono = req.body.telefono;

    universidad = await universidad.save()

    res.send(universidad)
    console.log('Universidad actualizada Correctamente')
  } catch (error) {
    console.log(error)
    res.status(500).send('Ocurrio un error al actualizar la universidad')
  }
};

export const consultarUniversidad = async (req, res) => {
  Universidad
    .findById(req.params.id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
};
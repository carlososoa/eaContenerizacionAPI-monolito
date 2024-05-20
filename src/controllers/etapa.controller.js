import Etapa from '../models/etapa.model.js';

export const crearEtapa = async (req, res) => {
  const { nombre } = req.body;

  try {

    const newEtapa = new Etapa({
      nombre
    })

    const existeEtapa = await Etapa.findOne({ nombre: req.body.nombre, _id: { $ne: newEtapa._id } })
    if (existeEtapa) {
      return res.status(400).send('Esta etapa ya existe')
    } else {
      const etapaGuardado = await newEtapa.save();
      res.json(etapaGuardado)
    }


  } catch (error) {
    console.log(error);
  }

};

export const consultarEtapas = async (req, res) => {
  Etapa
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))

};

export const actualizarEtapa = async (req, res) => {


  try {

    let etapa = await Etapa.findById(req.params.id)
    if (!etapa) {
      return res.status(400).send('Etapa no existe')
    }

    const existeEtapa = await Etapa.findOne({ nombre: req.body.nombre, _id: { $ne: etapa._id } })
    if (existeEtapa) {
      return res.status(400).send('Esta etapa ya existe')
    }

    etapa.nombre = req.body.nombre

    etapa = await etapa.save()

    res.send(etapa)
    console.log('Etapa actualizada Correctamente')
  } catch (error) {
    console.log(error)
    res.status(500).send('Ocurrio un error al actualizar la etapa')
  }
};

export const consultarEtapa = async (req, res) => {
  Etapa
    .findById(req.params.id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
};
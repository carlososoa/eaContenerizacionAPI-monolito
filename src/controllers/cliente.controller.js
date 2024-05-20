import Cliente from '../models/cliente.model.js';

export const crearCliente = async (req, res) => {

  const { nombre, email } = req.body;

  try {
    const newCliente = new Cliente({
      nombre,
      email

    })

    const clienteGuardado = await newCliente.save();
    res.json(clienteGuardado)

  } catch (error) {
    console.log(error);

  }

}

export const consultarClientes = async (req, res) => {

  Cliente
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))

};

export const actualizarCliente = async (req, res) => {


  try {

    let cliente = await Cliente.findById(req.params.id)
    if (!cliente) {
      return res.status(400).send('Cliente no existe')
    }

    const existeCliente = await Cliente.findOne({ nombre: req.body.nombre, _id: { $ne: cliente._id } })
    if (existeCliente) {
      return res.status(400).send('Este Cliente ya existe')
    }

    cliente.nombre = req.body.nombre;
    cliente.email = req.body.email;

    cliente = await cliente.save()

    res.send(cliente)
    console.log('Cliente actualizado Correctamente')
  } catch (error) {
    console.log(error)
    res.status(500).send('Ocurrio un error al actualizar el Cliente')
  }
};

export const consultarCliente = async (req, res) => {
  Cliente
    .findById(req.params.id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
};
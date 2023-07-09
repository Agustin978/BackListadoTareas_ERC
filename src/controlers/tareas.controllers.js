import Tarea from "../models/tareas";

//Controlador para obtener las tareas.
export const obtenerTareas = async (req, res) => 
{
    try
    {
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    }catch(error)
    {
        console.log('A ocurrido un error al intentar comunicarse con la base de datos. Info de error: '+error);
        res.status(400).json({
            mensaje: 'Error al buscar las tareas en la base de datos.'
        })
    }
}

//Controlador para crear tareas
export const creaTarea = async (req, res) =>
{
    try
    {
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({
            mensaje: 'La nueva tarea fue creada exitosamente.'
        })
    }catch(error)
    {
        console.log('A ocurrido un error al intentar comunicarse con la base de datos. Info de error: '+error);
        res.status(400).json({
            mensaje: 'Error al crear una nueva tarea en la base de datos.'
        });
    }
}
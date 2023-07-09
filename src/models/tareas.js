import { Schema, model } from "mongoose";

const tareaSchema = new Schema({
    tarea: {
        type: String,
        minLength: 5,
        maxLength: 150,
        required: true
    }
});

const Tarea = model('tarea', tareaSchema);
export default Tarea;
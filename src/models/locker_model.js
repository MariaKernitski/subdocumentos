import db from "../db.js"
import Student from "./student_model.js";

const Schema = db.Schema;

const lockerSchema = new Schema({
    height: {
        type: Number,
        required: true,
        min: 0
    },
    width: {
        type: Number,
        required: true,
        min: 0
    },
    length: {
        type: Number,
        required: true,
        min: 0
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    }
})

const Locker = db.model("Locker", lockerSchema);

const estudante = new Student({
    name: "Maria",
    birthDate: "2006/07/17",
    zipCode: "23456378",
    email: "maria@email.com"
})

estudante.save()

console.log(estudante);

const armario = new Locker({
    height: 0.5,
    width: 0.3,
    length: 0.3,
    student: estudante._id
})

armario.save();

console.log(armario);

const busca = async () => {
    return Locker.findById(armario._id).populate("student");
}

const buscaArmario = await busca();

console.log(buscaArmario);

export default Locker;
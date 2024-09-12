import mongoose from "mongoose";

const mongoDB = "mongodb+srv://kernitskimaria:Abacate8907@cluster0.rch5y.mongodb.net/"
const database = "armario";

async function main() {
    mongoose.connect(mongoDB + database)
}

main() 
    .then(() => console.log("Conectado com sucesso."))
    .catch(err => console.log(err))

export default mongoose

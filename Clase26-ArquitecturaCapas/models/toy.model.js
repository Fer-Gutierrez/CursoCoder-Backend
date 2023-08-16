import mongoose from "mongoose";

const toyCollection = "toys";
const toySchema = new mongoose.Schema({
    referencia:{
        type:String,
        required: true,
        unique: true
    },
    descripcion:{
        type:String,
        required: true
    },
    stock:{
        type:Number,
        required: true,
        integer: true,
        min: 0
    },
    precio: {
        type:Number,
        required: true,
        min: 0
    },
    imagenes:{
        type:[String],
        default: []
    }

})
const toyModel = new mongoose.model(toyCollection,toySchema)
export default toyModel;
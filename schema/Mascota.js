const { Schema, model, SchemaTypes } = require('mongoose');

const Mascota = new Schema({
    nombre: String,
    raza: String,
    edad: Number,
    imagen: String,
    tipo: String,
    descripcion: String,
    fechaNacimiento: Date,
    peso: Number,
    sexo: String,
    entregan: [Object],
    habilitado: Number, // 0: si está habilitado, 1: esta en proceso de adopcion, 2: ya está adoptado
    usuarioAdopcion: {
        type: SchemaTypes.ObjectId,
        ref: 'Usuario'
    }

}, { timestamps: true, versionKey: false });

module.exports = model('Mascota', Mascota);
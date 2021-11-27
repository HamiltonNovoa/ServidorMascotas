const { Schema, model } = require('mongoose');

const Usuario = new Schema({
    nombre: String,
    apellido: String,
    rol: String,
    correo: { type: String, required: true },
    contrasena: { type: String, required: true },
}, { timestamps: true, versionKey: false });

module.exports = model('Usuario', Usuario);
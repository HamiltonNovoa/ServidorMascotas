const { Schema, model } = require('mongoose');

const Usuario = new Schema({
    nombre: String,
    apellido: String,
    rol: String,
    documento: Number,
    correo: String,
    contrasena: String,
}, { timestamps: true, versionKey: false });

module.exports = model('Usuario', Usuario);
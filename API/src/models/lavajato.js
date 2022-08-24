const mongoose = require('mongoose')

const Lavajato = mongoose.model('Lavajato', {
    nome: String,
    location: String,
    price: String,
    detalhes: String,
})

module.exports = Lavajato;
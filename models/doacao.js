var mongoose = require('mongoose');

module.exports = function() {

  var doacaoSchema = mongoose.Schema({
    status: {
      type: String
    },
    beneficiaria: {
      type: String
    },
    _identidade: {
      type: String
    },
    _idusuario: {
      type: String
    },
    valordoado: {
      type: Number
    },
    validacao: {
      type: Number,
      default: 0
    },
    data_doacao: {
      type: Date,
      default: Date.now
    }
  });
  return mongoose.model('Doacao', doacaoSchema);
}

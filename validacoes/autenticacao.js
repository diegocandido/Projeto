module.exports = function(req, res) {
	req.assert('email', 'E-mail inválido.').isEmail();
	req.assert('password', 'Sua senha deve conter 6 a 12 caracteres.').len(6, 200);

	var validacaoErros = req.validationErrors() || [];

	if (validacaoErros.length > 0) {
		validacaoErros.forEach(function(e) {
			req.flash('erro', e.msg);
		});
		return false;
	}
	return true;
}

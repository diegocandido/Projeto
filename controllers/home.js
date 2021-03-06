module.exports = function(app) {

  var nodemailer = require('nodemailer');

  var HomeController = {
    index: function(req, res) {
      res.render('home/index');
    },

    doar: function(req, res) {
      res.render('home/doar');
    },

    sobre: function(req, res) {
      res.render('home/sobre');
    },

    obrigado: function(req, res) {
      res.render('home/obrigado');
    },

    comodoar: function(req, res) {
      res.render('home/comodoar');
    },
    legislacao: function(req, res) {
      res.render('home/legislacao');
    },
    logout: function(req, res) {
      req.session.destroy();
      res.redirect('/');
    },
    enviar2: function(req, res) {
      res.render('home/contato');
    },
    enviar: function(req, res) {
      var transport = nodemailer.createTransport("SMTP", {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "diego@diegocandido.com",
          pass: "Diego650121"
        }
      });

      var mailOptions = {
        from: req.body.nome + " <" + req.body.email + ">",
        to: "diego@diegocandido.com",
        subject: req.body.assunto,
        text: req.body.mensagem
      }

      transport.sendMail(mailOptions, function(err, response) {
        if (err) {
          req.flash('erro', 'Erro ao enviar e-mail: ' + err);
          res.redirect('/email');
        } else {
          req.flash('info', 'E-mail enviado com sucesso!');
          res.redirect('/email');
        }
      });
    }
  }

  return HomeController;
}

(async () => {
  const nodemailer = require('nodemailer')

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  })

  const destination = []
  const content = `<html>
                    <head>
                    </head>
                    <body>
                        <h1>E-mail para definição de senha</h1>
                        <p>Você foi cadastrado na plataform BotAdmin! Acesse esse link para definir sua senha:</p>
                        <a href="http://test_email/redefinePass?e=123_teste_carga">Link de acesso!<a>
                        <br>
                    </body>
                </html>`
  const subject = 'E-mail de Definição de Senha'

  for (let i = 0; i < 10; i++) {
    for (const iterator of destination) {
      const result = await transporter.sendMail({ from: '', to: iterator, subject: subject, html: content })
      console.log('result', result)
    }
  }
})()

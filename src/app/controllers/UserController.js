import Mail from '../providers/MailProvider';

export default {
  async create(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    const mail = {
      to: `${name} <${email}>`,
      from: 'Queue Test <queue@queuetest.com.br>',
      subject: 'Cadastro de usuário',
      html: `Olá. ${name}, bem-vindo ao sistema de filas de teste :D`,
    };

    Mail.sendMail(mail);

    return res.status(201).json(user);
  },
};

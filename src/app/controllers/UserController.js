import Queue from '../providers/QueueProvider';

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

    await Queue.add('RegistrationMail', { mail });

    return res.status(201).json(user);
  },

  async show(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    await Queue.add('UserReport', { user });

    return res.status(200).json(user);
  },
};

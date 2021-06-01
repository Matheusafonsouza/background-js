import Mail from '../providers/MailProvider';

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { mail } = data;

    await Mail.sendMail(mail);
  },
};

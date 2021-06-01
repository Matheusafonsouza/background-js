import nodemailer from 'nodemailer';

class MailProvider {
  constructor() {
    nodemailer.createTestAccount().then((account) => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    }).catch((err) => console.log(err));
  }

  async sendMail({
    to, from, subject, html,
  }) {
    const message = await this.client.sendMail({
      to,
      from,
      subject,
      html,
    });

    console.log(`Message sent: ${message.messageId}`);
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(message)}`);
  }
}

export default new MailProvider();

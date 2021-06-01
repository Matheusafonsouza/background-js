import Queue from 'bull';
import redisConfig from '../../config/redis';

import RegistrationMail from '../jobs/RegistrationMail';

const mailQueue = new Queue(RegistrationMail.key, redisConfig);

mailQueue.on('failed', (job) => {
  console.log(`Job failed ${job.name} - ${job.data}`);
});

export default mailQueue;

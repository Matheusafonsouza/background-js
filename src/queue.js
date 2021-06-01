import 'dotenv/config';

import Queue from './app/providers/QueueProvider';
import RegistrationMail from './app/jobs/RegistrationMail';

Queue.process(RegistrationMail.handle);

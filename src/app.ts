import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import env from './environments/env';
import { apiRoute } from './routers/api.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(env.isDevelopment ? 'dev' : 'tiny'));

app.get('/', (_, res) => {
  return res.send('<h1>Hello world, page: {index.html}</h1>').end();
});

app.use('/api', apiRoute);

app.listen(env.port, () => {
  console.log('[+] listen on port', env.port);
});

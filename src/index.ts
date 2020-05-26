import express from 'express';
import { router } from './route/v1';

const app: express.Express = express();

app.use((req: express.Request, res: express.Response, next) => {
  res.header('Acess-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', router);

app.listen(3000);

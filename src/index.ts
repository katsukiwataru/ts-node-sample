import express from 'express';

const app: express.Express = express();

app.use((req: express.Request, res: express.Response, next) => {
  res.header('Acess-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/v1/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Hello World',
  });
});

app.listen(3000);

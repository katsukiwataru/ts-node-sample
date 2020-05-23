import express from 'express';

const app: express.Express = express();

app.use((req: express.Request, res: express.Response, next) => {
  res.header('Acess-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: express.Router = express.Router();
router.get('/api/getTest', (req: express.Request, res: express.Response) => {
  res.send(req.query);
});
router.post('/api/postTest', (req: express.Request, res: express.Response) => {
  res.send(req.body);
});

app.use(router);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 3000!');
});

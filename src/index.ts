import express from 'express';
import mongoose from 'mongoose';
import { router } from './route/v1';

const app: express.Express = express();

const connectOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExpressAPI', connectOption);
mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use('/api/v1/', router);

app.listen(port);
// eslint-disable-next-line no-console
console.log('listen on port ' + port);

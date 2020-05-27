import express from 'express';
import { article } from './article';
import { user } from './user';

export const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Hello World',
  });
});

router.use('/articles', article);

router.use('/user', user);

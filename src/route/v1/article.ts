import express from 'express';

export const article = express.Router();

article.get('/test', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'this is article api',
  });
});

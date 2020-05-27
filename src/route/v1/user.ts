import express from 'express';

export const user = express.Router();

user.get('/test', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'this is user api',
  });
});

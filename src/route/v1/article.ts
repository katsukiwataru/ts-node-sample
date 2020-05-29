import express from 'express';
import { ArticleModel } from '../../models/articleModel';
export const article = express.Router();

article.post('/', (req: express.Request, res: express.Response) => {
  const Article = new ArticleModel();
  Article.title = req.body.title;
  Article.text = req.body.text;

  Article.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Success!!' });
    }
  });
});

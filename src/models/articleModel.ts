import { Schema, model, Document } from 'mongoose';

interface Article extends Document {
  title: String;
  text: String;
  data: String;
}

const ArticleSchema = new Schema({
  title: String,
  text: String,
  data: String,
});

export const ArticleModel = model<Article>('ArticleModel', ArticleSchema);

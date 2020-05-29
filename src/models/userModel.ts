import { Schema, model, Document } from 'mongoose';

interface User extends Document {
  name: String;
  screen_name: String;
  bio: String;
}

const UserSchema: Schema = new Schema({
  name: String,
  screen_name: String,
  bio: String,
});

export const UserModel = model<User>('UserModel', UserSchema);

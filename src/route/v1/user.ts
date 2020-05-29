import express from 'express';
import { UserModel } from '../../models/userModel';

export const user = express.Router();

user.post('/', (req: express.Request, res: express.Response) => {
  const User = new UserModel();
  User.name = req.body.screen_name;
  User.screen_name = req.body.screen_name;
  User.bio = req.body.bio;

  User.save((err: Error) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Success' });
    }
  });
});

user.get('/', (req: express.Request, res: express.Response) => {
  UserModel.find().then((users) => {
    // eslint-disable-next-line no-console
    console.log(users);
    res.json(users);
  });
});

user.get('/:id', (req: express.Request, res: express.Response) => {
  const Userid = req.params.id;
  UserModel.findById(Userid, () => res.json());
});

user.put('/:id', (req: express.Request, res: express.Response) => {
  var Userid = req.params.id;
  UserModel.findById(Userid, (err, user) => {
    if (!user) return;
    if (err) {
      res.send(err);
    } else {
      user.name = req.body.name;
      user.screen_name = req.body.screen_name;
      user.bio = req.body.bio;
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.json({ message: 'Success!' });
        }
      });
    }
  });
});

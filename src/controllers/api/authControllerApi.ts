import User from '../../models/user';
import { Request, Response } from 'express'
import utils from '../../utils/utils';
import _ from 'underscore'
const userControllerApi = {
  login: (req: Request, res: Response) => {
    let body = req.body;
    User.findOne({ email: body.email }, (err, userDB) => {
      return utils.response(err, userDB, res)
    })
  },
  users_create: (req: Request, res: Response) => {
    let body = req.body;
    let user = new User({
      name: body.name,
      email: body.email,
      password: body.password
    })

    user.save((err, userDB) => {
      console.log("userDB", userDB)
      return utils.response(err, userDB, res)
    })
  },
  users_update: (req: Request, res: Response) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'email', 'password'])
    User.findByIdAndUpdate(id, body,
      { new: true, runValidators: true },
      (err, userDB) => {
        return utils.response(err, userDB, res, { message: "The ID doesn't exists" })
      })
  },
  users_delete: (req: Request, res: Response) => {
    let id = req.params.id;
    User.findByIdAndRemove(id, (err, user) => {
      return utils.response(err, { message: 'User deleted successfuly' }, res)
    })
  }
}

export default userControllerApi;
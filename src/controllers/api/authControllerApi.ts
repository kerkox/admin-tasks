import User from '../../models/user';
import { Request, Response } from 'express'
import utils from '../../utils/utils';
import _ from 'underscore'
const authControllerApi = {
  login: (req: Request, res: Response) => {
    let body = req.body;
    User.findOne({ email: body.email }, (err, userDB) => {
      utils.validateErrors(err, res)
      let incorrectMessage = "User or Password is incorrect"
      if (!userDB) {
        return utils.responseError(err, res, incorrectMessage)
      }
      if (!utils.comparePassword(body.password, userDB.password)) {
        return utils.responseError(err, res, incorrectMessage)
      }
      return utils.generateToken(userDB, res);
    })
  },
  register: (req: Request, res: Response) => {

  }
}

export default authControllerApi;
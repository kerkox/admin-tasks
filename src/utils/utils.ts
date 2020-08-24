import { Response } from 'express'
import bcrypt from 'bcrypt';
import { IUser } from '../models/user';
import jwt from 'jsonwebtoken';

const utils = {
  response: (err: any, model: any, res: Response, messageError?: any) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if (!model) {
      let error = messageError || err
      return res.status(400).json({
        ok: false,
        error,
      })
    }
    return res.json({
      ok: true,
      data: model
    })
  },
  validateErrors: (err: any, res: Response) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
  },
  responseError: (err: any, res: Response, messageError?: any, code: number = 400) => {
    let message = messageError || err;
    return res.status(code).json({
      ok: false,
      message
    })
  },
  comparePassword: (passwordInput: string, userPassword: string): boolean => {
    return bcrypt.compareSync(passwordInput, userPassword)
  },
  generateToken: (user: IUser, res: Response) => {
    const SEED: jwt.Secret = process.env.SEED || "CHANGE_IT"
    let token = jwt.sign({
      user
    }, SEED, {
      expiresIn: process.env.TOKEN_EXPIRES
    })
    return res.json({
      ok: true,
      user,
      token
    })
  }


}

export default utils
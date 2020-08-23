import { Response } from 'express'

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
    res.json({
      ok: true,
      data: model
    })
  }
}

export default utils
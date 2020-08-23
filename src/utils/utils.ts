import { Response } from 'express'

const utils = {
  response: (err: any, model: any, res: Response) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if (!model) {
      return res.status(400).json({
        ok: false,
        err,
      })
    }
    res.json({
      ok: true,
      data: model
    })
  }
}

export default utils
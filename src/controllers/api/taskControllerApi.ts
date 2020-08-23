import Task from '../../models/task';
import { Request, Response } from 'express'
import utils from '../../utils/utils';
import _ from 'underscore'
const taskControllerApi = {
  tasks_list: (req: Request, res: Response) => {
    Task.find({}, (err, tasks) => {
      return utils.response(err, tasks, res)
    })
  },
  tasks_create: (req: Request, res: Response) => {
    let body = req.body;
    let task = new Task({
      description: body.description,
      priority: body.priority,
      dueDate: body.dueDate
    })
    task.save((err, taskDB) => {
      return utils.response(err, taskDB, res)
    })
  },
  tasks_udpate: (req: Request, res: Response) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['description', 'priority', 'dueDate'])
    Task.findByIdAndUpdate(id, body,
      { new: true, runValidators: true },
      (err, taskDB) => {
        return utils.response(err, taskDB, res, { message: "The ID doesn't exists" })
      })
  },
}

export default taskControllerApi;
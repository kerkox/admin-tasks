import Task from '../../models/task';
import { Request, Response } from 'express'
import utils from '../../utils/utils';
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

  }
}

export default taskControllerApi;
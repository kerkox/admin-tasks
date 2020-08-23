import Task from '../../models/task';
import { Request, Response } from 'express'
const taskControllerApi = {
  tasks_list: (req: Request, res: Response) => {
    Task.find({}, (err, tasks) => {
      res.json({
        ok: true,
        tasks
      });
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
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      if (!taskDB) {
        return res.status(400).json({
          ok: false,
          err,
        })
      }
      res.json({
        ok: true,
        task: taskDB
      })
    })

  }
}

export default taskControllerApi;
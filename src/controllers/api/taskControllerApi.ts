import Task from '../../models/task';
import { Request, Response } from 'express'
const tasks = [
  { description: "Tarea 1", priority: 1, date: new Date() },
  { description: "Tarea 2", priority: 2, date: new Date() }]
const taskControllerApi = {
  tasks_list: (req: Request, res: Response) => {
    res.json(tasks);
  },
  tasks_create: (req: Request, res: Response) => {
    let body = req.body;
    tasks.push(body);
    res.json(tasks)

  }
}

export default taskControllerApi;
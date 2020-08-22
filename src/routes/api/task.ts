import { Router, Request, Response } from 'express';

const router = Router();
const tasks = [
  { description: "Tarea 1", priority: 1, date: new Date() },
  { description: "Tarea 2", priority: 2, date: new Date() }]
router.get('/tasks', (req: Request, res: Response) => {
  res.json(tasks);
})

router.post('/tasks', (req: Request, res: Response) => {
  let body = req.body;
  tasks.push(body);
  res.json(tasks)

})



export default router;
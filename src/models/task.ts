import mongoose from 'mongoose';

export interface ITask extends mongoose.Document {
  description: string;
  priority: number;
  dueData: Date;
};

export const TaskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  priority: { type: Number, required: true },
  dueData: { type: Date, required: true }

});

const Task = mongoose.model<ITask>('Task', TaskSchema);

export default Task;
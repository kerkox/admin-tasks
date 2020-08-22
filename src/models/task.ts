import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  name: string;
  somethingElse?: number;
};

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  somethingElse: Number,
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
  descripcion: {
    type: String,
    unique: true,
    required: [true, "La descripcion de la task es requerida"]
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  deleted_at: {
    type: Date,
    default: null
  }
})

module.exports = mongoose.model('Task', taskSchema);
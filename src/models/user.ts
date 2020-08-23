import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'bcrypt';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: number;
};
const saltRounds = 10;

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: Number, required: [true, "The password is mandatory"] },

});
// Hide password
UserSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
}

// Hash password
UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, saltRounds)
  }
  next();
})

UserSchema.methods.validatePassword = function (password: string) {
  return bcrypt.compareSync(password, this.password)
}




UserSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" })
const User = mongoose.model<IUser>('User', UserSchema);

export default User;
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'bcrypt';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
};
const saltRounds = 10;
const validateEmail = function (email: string) {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return regExp.test(email);
}

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true,
    validate: [validateEmail, 'Please input a valid email'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/]
  },
  password: {
    type: String,
    required: [true, "The password is mandatory"]
  },

});
// Hide password
UserSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
}

// Hash password
UserSchema.pre('save', function (this: IUser, next: any) {
  if (this.isModified('password')) {
    console.log("this before", this)
    this.password = bcrypt.hashSync(this.password, saltRounds);
    console.log("this after", this)
  }
  next();
})

UserSchema.methods.validatePassword = function (password: string) {
  return bcrypt.compareSync(password, this.password)
}




UserSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" })
const User = mongoose.model<IUser>('User', UserSchema);

export default User;
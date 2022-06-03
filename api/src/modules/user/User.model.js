import UserSchema from "./User.schema.js";

// create a new user in the table
export const createUser = (newUserObj) => {
  return UserSchema(newUserObj).save();
};

// find a user, userObj should have email and password

export const findUser = (userObj) => {
  return UserSchema.findOne(userObj);
};

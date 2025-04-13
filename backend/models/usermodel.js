import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  // username, password, email
  username: {
    type: String,
  },

  password: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
  },
});

const User = mongoose.model("ecommerce_user", userSchema);

export default User;

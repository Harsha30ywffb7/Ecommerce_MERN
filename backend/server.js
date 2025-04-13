import express from "express";
import cors from "cors";
const app = express();
import mongoose from "mongoose";
import User from "./models/usermodel.js";

const PORT_NUMBER = 3000;

app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.use(express.json()); // parse the data from header

app.post("/signup", async (req, res) => {
  // new user created. -> data added tib dv
  const { username, email, password } = req.body;
  // STORE
  const newuser = await User.create({
    email: email,
    password: password,
    username: username,
  });

  res.json({
    message: "user successfully created",
    data: newuser,
    status: 201,
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  console.log(user.password, password);
  if (user.password === password) {
    return res.status(200).send({
      data: user,
      message: "user logged successfully",
    });
  } else {
    return res.status(400).send({ error: "invalid credentials" });
  }
});

const mongo_Url =
  "mongodb+srv://Innov8mateAdmin:HarshA30ywFFB@innov8mate.4drbo.mongodb.net/?retryWrites=true&w=majority&appName=Innov8mate";

mongoose
  .connect(mongo_Url)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((error) => {
    console.log("error in mongodb", error);
  });

app.listen(PORT_NUMBER, () => {
  console.log("backend is running", PORT_NUMBER);
});

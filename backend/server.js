import express from "express";
import cors from "cors";
const app = express();

const PORT_NUMBER = 3000;

app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.use(express.json()); // parse the data from header

// HTTP: [get, post, put, delete]
// get -> data fetch
// post->

app.post("/signup", (req, res) => {
  console.log(req.body);

  res.send({ data: "Home page" });
});

app.get("/login", (req, res) => {
  res.send({ data: { messgae: "user sucessfully login" } });
});
app.listen(PORT_NUMBER, () => {
  console.log("backend is running", PORT_NUMBER);
});

// params (nums, ()=>{})

// const a = 3;
// console.log(a);
// console.log("console device");

const express = require("express");
const mongoose = require("mongoose");
const employeeRouter = require("./routes/employee");
const userRouter = require("./routes/user");
require("dotenv").config();
// const cors = require("cors");

const app = express();

const PORT = 5000;

// connection our app to pur database(Mongodb atlas)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
// app.use(cors({ origin: "*" }));
app.use("/api/employee", employeeRouter);
app.use("/api/user", userRouter);

//setting up our server
app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});

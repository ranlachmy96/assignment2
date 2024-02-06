require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

const {
  familyReunificationRouter,
} = require("./routers/familyReunification.router");
app.use("/familyReunification", familyReunificationRouter);
app.listen(port, () =>
  console.log(`Express server is running on port ${port}`),
);

const express = require("express");
const app = express();

const contatos = require("./routes/contatos-routes");

app.use(express.json());
app.use("/", contatos);

module.exports = app;

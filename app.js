const express = require("express");
const config = require("config");
const app = express();
app.use(express.json());
const PORT = config.get("port") ?? 3030;
const sequelize = require("./config/db");
const mainRouter = require("./routes");
const viewRoute = require("./routes/views.routes");
const exHbs = require("express-handlebars");
const hbs = exHbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static("views"));

app.use("/", viewRoute);
app.use("/api", mainRouter);

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    app.listen(PORT, () =>
      console.log(`Server started at http://localhost${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
}

start();

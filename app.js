const port = 3000;
const maintenance = false;

const express = require("express");
const app = express();

const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cookiesLogin = require("./src/middlewares/cookies-login");
const indexRoutes = require("./src/routes");

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(
  session({
    secret: "6F8FA2A42E3BA185DFC0FB",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(cookiesLogin);
app.use(express.json());
app.use(express.static(path.resolve("src", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", indexRoutes);

// app.use((req, res, next) => {
//   res.status(404).render("pages/404");
//   next();
// });

app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});

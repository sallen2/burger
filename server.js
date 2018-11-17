const express = require("express");
const exphbr = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbr({ defaultLayout: "main" }));
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
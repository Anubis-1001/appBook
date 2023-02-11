if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require("express");
const mongoose = require('mongoose');
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");


/*mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('erro', (error)=>{
    console.log(error);
});

db.once('open', ()=>console.log('Connected to mongoose'));
*/

app.set("view engine", "ejs");
app.set("views", __dirname+"/views");
app.set("layout", __dirname+"/layouts/layout");
app.use(expressLayouts);
app.use(express.static("/public"));
app.use("/", indexRouter.home);

app.listen(process.env.PORT || 3000 );
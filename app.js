const express = require("express");
const app = express();

const indexRouter = require("./routes/index");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);


app.listen(3000, () => {
    // logger.info("server open");
    console.log("server open")
});
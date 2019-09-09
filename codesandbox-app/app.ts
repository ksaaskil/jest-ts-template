const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_: any, res: any) => res.send("<h1>Hello World</h1>"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require("express");
const app = express();
const produto = require("./api/produto");


const PORT = process.env.PORT || 4004;

app.use('/api/produto/:nome', produto);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

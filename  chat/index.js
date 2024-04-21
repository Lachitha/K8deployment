const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
	res.send("Hello World Chat!");
});

app.listen(port, () => {
	console.log(`chat service listening at http://127.0.0.1:${port}`);
});

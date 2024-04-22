const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
	res.send("Hello World recieve!");
});

app.listen(port, () => {
	console.log(`recieve service listening at http://127.0.0.1:${port}`);
});

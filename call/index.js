const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
	res.send("Hello World call!");
});

app.listen(port, () => {
	console.log(`recieve service listening at http://127.0.0.1:${port}`);
});

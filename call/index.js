const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
	res.send("Hello World call!");
});

app.listen(port, () => {
	console.log(
		`recieve service listening at https://adc5f6da7caf045febc3a1a4bf130c97-1272833628.ap-southeast-1.elb.amazonaws.com:${port}`
	);
});

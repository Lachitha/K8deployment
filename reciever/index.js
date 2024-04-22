const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
	res.send("Hello World recieve!");
});

app.listen(port, () => {
	console.log(
		`recieve service listening at http://adc5f6da7caf045febc3a1a4bf130c97-1272833628.ap-southeast-1.elb.amazonaws.com:${port}`
	);
});

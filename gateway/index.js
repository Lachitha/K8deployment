const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = 3000;

app.use(
	"/chat",
	createProxyMiddleware({
		target:
			"http://adc5f6da7caf045febc3a1a4bf130c97-1272833628.ap-southeast-1.elb.amazonaws.com:3001",
		pathRewrite: { "^/chat": "" },
	})
);
app.use(
	"/recieve",
	createProxyMiddleware({
		target:
			"http://adc5f6da7caf045febc3a1a4bf130c97-1272833628.ap-southeast-1.elb.amazonaws.com:3002",
		pathRewrite: { "^/recieve": "" },
	})
);

app.listen(port, () => {
	console.log(
		`api gateway listening at http://adc5f6da7caf045febc3a1a4bf130c97-1272833628.ap-southeast-1.elb.amazonaws.com:${port}`
	);
});

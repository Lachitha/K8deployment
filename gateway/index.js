const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = 3000;

app.use(
	"/chat",
	createProxyMiddleware({
		target: "http://0.0.0.0:3001",
		pathRewrite: { "^/chat": "" },
	})
);
app.use(
	"/recieve",
	createProxyMiddleware({
		target: "http://0.0.0.0:3002",
		pathRewrite: { "^/recieve": "" },
	})
);

app.listen(port, () => {
	console.log(`api gateway listening at http://0.0.0.0:${port}`);
});

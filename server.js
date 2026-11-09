// Throwaway app for gantry#18: /health and /app answer 200; anything else 404.
const http = require("http");
http.createServer((req, res) => {
  res.statusCode = ["/health", "/app"].includes(req.url) ? 200 : 404;
  res.end();
}).listen(process.env.PORT || 3000);

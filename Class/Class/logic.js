const http = require("http");
const fs = require("fs");

function logRequest(req) {

  const now = new Date();

  const day = now.toLocaleString("en-IN", { weekday: "long" });
  const date = now.toLocaleDateString("en-IN");
  const time = now.toLocaleTimeString("en-IN");

  const log = `${day}, ${date} - ${time} | ${req.method} ${req.url}\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Failed to write log:", err);
    }
  });
}

const server = http.createServer((req, res) => {

  logRequest(req);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server Working");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

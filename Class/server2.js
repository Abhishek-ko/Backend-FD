const http = require("http");
const fs = require("fs");

const FILE = "nodes.json";

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/nodes") {

        fs.readFile(FILE, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                return res.end("Error reading file");
            }

            res.setHeader("Content-Type", "application/json");
            res.end(data);
        });
    }

    else if (req.method === "POST" && req.url === "/nodes") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const newNode = JSON.parse(body);

            fs.readFile(FILE, "utf8", (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    return res.end("Error reading file");
                }

                let nodes = JSON.parse(data);

                nodes.push(newNode);

                fs.writeFile(FILE, JSON.stringify(nodes, null, 2), err => {
                    if (err) {
                        res.statusCode = 500;
                        return res.end("Error writing file");
                    }

                    res.end("Node added successfully");
                });
            });
        });
    }

    else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
})
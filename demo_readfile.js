let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("demofile1.html", (err, data) => {
      fs.appendFile("mynewfile1.txt", "Hello content!", (err) => {
        if (err) throw err;
        console.log("Saved!");
      });
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

const http = require("http");
const app = require("./app");
const port = process.env.PORT || 5000;

const dotenv = require('dotenv');
dotenv.config();

app.set(port);

const server = http.createServer(app);

server.on("listening", function () {
  console.log("Working....");
});

server.listen(port, () => console.log(`🚀 Server running on port: ${port}`));

app.set("port", port);
const net = require("net");

const conn = net.createConnection({
  host: 'localhost',
  port: 3000,
});

conn.setEncoding("utf8"); // client.js
conn.on("data", (data) => {
  console.log("Server says: ", data);
});
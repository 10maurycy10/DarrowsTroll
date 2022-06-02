const WebSocket = require('ws');
const msgpack = require("msgpack-lite")

let url = "wss://darrows.zerotixdev.repl.co/"

let con = new WebSocket(url);

let send = (msg) => con.send(msgpack.encode(msg));

let selfId = null;

con.on('message', (data) => {
	let obj = msgpack.decode(data);
	if (obj.type == "chat") {
		console.log(`> ${obj.name}: ${obj.msg}`)
	}
})

con.on('open', () => {
	console.log("connected")
})

con.on('close', () => {
	console.log("connection closed, do not expect it to work.")
})

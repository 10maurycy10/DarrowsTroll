const WebSocket = require('ws');
const msgpack = require("msgpack-lite")
const prompt = require("prompt")



let url = "wss://darrows.zerotixdev.repl.co/"


function send(name, msg) {
	let con = new WebSocket(url);

	let send = (msg) => con.send(msgpack.encode(msg));

	let selfId = null;

	con.on('open', () => {
		console.log("connected")
		send({joinE: true});
		send({chat: `/name ${"\u200B" + name}`})
		send({chat: msg})
		con.close()
	})
}


prompt.get(["name", "msg"], (err, result) => {
	if (err) {
		console.log(err)
	} else {
		send(result.name, result.msg)
	}
})

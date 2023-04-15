const express = require("express");
const bodyParser = require("body-parser");
const Discord = require("discord.js");

const app = express();
const client = new Discord.Client();
const PORT = process.env.PORT || 3000;

// Set up middleware
app.use(bodyParser.json());

// Set up routes
app.post("/send-message", function(req, res) {
	// Get message from request body
	const message = req.body.message;

	// Send message to Discord bot
	const channel = client.channels.cache.get("850958525776527373");
	channel.send(message);

	// Send response back to client
	res.status(200).send("Message sent!");
});

// Start server and Discord bot
app.listen(PORT, function() {
	console.log("Server started on port " + PORT);
	client.login("MTA5NjY0MDU3MDY4NTkyNzUyNQ.G0u9ko.Fd8FV2mOeLsZYzu31mHXwnLjG-NOltL2vAfwXY");
});

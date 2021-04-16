const mqtt = require('mqtt');

const options = {
  host: '192.168.0.11',
  port: 1883,
  protocol: 'mqtt',
};
const client = mqtt.connect(options);

client.on("connect", () => {	
  console.log("connected");
})

client.on("error", (error) => { 
  console.log("Can't connect" + error);
})

// subscribe
const topic = 'ex/t1';
client.subscribe(topic, { qos:1 });

client.on('message', (topic, message, packet) => {
	console.log(`[message] ${topic} '${message}'`);
});

const { setTimeout } = require('timers/promises');

const formatMemoryUsage = (data) => `${Math.round(data / 1024 / 1024 * 100) / 100}`;

const print = () => console.log(formatMemoryUsage(process.memoryUsage().heapUsed))

async function main() {
	print();
	let MongoClient;
	try {
		MongoClient = require('mongodb').MongoClient;
	} catch {} 
	print();

	const client = new MongoClient(process.env.MONGODB_URI);
	await client.connect();

	for (let i=0; i<10; ++i) {
		await client.db('foo').collection('bar').insertOne({ name: 'bailey' });	
		await setTimeout(1000);
		print();
		process.stderr.write('.');
	}

	await client.close();
}

main();

import * as dotenv from 'dotenv';
dotenv.config();

import { default as express, Express } from 'express';

let app = express();

app.get('/', (req, res) => {
	res.send('API: /api/:date');
});

app.get('/api/:date', (req, res) => {
	const date = req.params.date;
	let parsed = new Date(date);
	if (parsed.toString() == 'Invalid Date') {
		parsed = new Date(parseInt(date));
	}
	res.json({ unix: parsed.getTime(), utc: parsed.toUTCString() });
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Ready, listening on port ' + (process.env.PORT || 3000));
});
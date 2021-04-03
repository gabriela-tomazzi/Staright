//	npm init -y
//	npm install express

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.listen(5000, () => {
	console.log(`sv na porta 5000`);
});

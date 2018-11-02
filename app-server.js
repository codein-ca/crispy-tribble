const express = require('express');
const app = express();

// serves files on public folder (our web server root)
app.use(express.static('./public'));
// exposes direct access to B4 css/ and js/ folders
app.use(express.static('./node_modules/bootstrap/dist'));

app.listen(3000);

console.info('Polling server running');

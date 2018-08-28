const express = require("express");

const bodyParser = require("body-parser");
const ac = require("./controllers/activity_controller");

const app = express();
app.use(bodyParser.json());
app.get('/api/items', ac.read)
app.post('/api/items', ac.create)
app.delete('/api/items', ac.delete)
app.put('/api/items/', ac.update)

const PORT = 4444;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

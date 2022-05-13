require('dotenv').config();

const server = require('./src/server');

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
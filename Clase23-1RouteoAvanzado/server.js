import express from 'express';
import ruteo from './routers/ruteo.router.js';

const app = express();

app.use('/api/ruteo', ruteo);

const server = app.listen(8080, () => {
  console.log('ServerArriva ', server.address().port);
});
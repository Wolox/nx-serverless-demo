// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import * as utils from '../../../libs/utils/src';


import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  console.log(utils.utils());

  res.send({ message: 'Welcome to wolox-express-demo-nx!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

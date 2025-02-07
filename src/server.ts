import express from 'express';
import { type Express, type Request, type Response } from 'express';
import router from './routes/index.js';

function main() {
  const app: Express = express();
  const port = 3000;

  app.use(express.json());
  app.use('/', router);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main();
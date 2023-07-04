import { Pool } from './src/database/pool.js';
import { Server } from './src/server.js';

Pool
  .connect()
  .then(() => {
    Server.start(process.env.PORT);
  })
  .catch((e) => {
    console.log(e);
  });
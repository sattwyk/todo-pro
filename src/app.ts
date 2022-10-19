import { logger } from './utils/logger';
import { createServer } from './utils/createServer';
import { connectToDb } from './utils/db';
import { config } from './utils/config';

(async function startServer() {
  const server = await createServer();

  server.listen(
    {
      port: config.PORT,
      host: config.HOST,
    },
    () => {
      logger.info(`App is listening on Port: ${config.PORT} 🚀`);
    }
  );

  await connectToDb();
})();

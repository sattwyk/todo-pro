import { logger } from './utils/logger';
import { createServer } from './utils/createServer';

(async function startServer() {
  const server = await createServer();

  server.listen(
    {
      port: 4000,
      host: '0.0.0.0',
    },
    () => {
      logger.info(`App is listening on Port: 400 🚀`);
    }
  );
})();

import { logger } from "./utils/logger";
import { createServer } from "./utils/createServer";
import { connectToDb, disconnectFromDb } from "./utils/db";
import { config } from "./utils/config";

const signals = ["SIGINT", "SIGTERM", "SIGHUP"] as const;

async function gracefulShutDown({
  signal,
  server,
}: {
  signal: typeof signals[number];
  server: Awaited<ReturnType<typeof createServer>>;
}) {
  logger.info(`GOT signal ${signal}. Good Bye 👋 `);

  await server.close();

  await disconnectFromDb();

  process.exit(0);
}

(async function startServer() {
  const server = await createServer();

  server.listen(
    {
      port: config.PORT,
      host: config.HOST,
    },
    (err) => {
      if (err) return logger.error(`Error starting the server 🤕 `);
      logger.info(`App is listening on Port: ${config.PORT} 🚀`);
    }
  );

  await connectToDb();

  for (let i = 0; i < signals.length; i++) {
    process.on(signals[i], () =>
      gracefulShutDown({ signal: signals[i], server })
    );
  }
})();

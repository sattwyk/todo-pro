import { createServer } from './utils/createServer';

(async function startServer() {
  const server = await createServer();

  server.listen(
    {
      port: 4000,
      host: '0.0.0.0',
    },
    () => {
      console.log('App is listening on Port: 400 🚀');
    }
  );
})();

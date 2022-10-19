import fastify from 'fastify';

export const createServer = async () => {
  const app = fastify();

  return app;
};

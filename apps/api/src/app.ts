import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';

export function buildApp() {
  const app = Fastify({ logger: process.env.NODE_ENV !== 'test' });

  app.register(helmet);
  app.register(cors, { origin: 'http://localhost:5173', credentials: true });

  app.get('/health', async () => ({ status: 'ok' }));

  return app;
}

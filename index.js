import Fastify from 'fastify';
const fastify = Fastify({
  logger: true,
});

fastify.register(async function () {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: (_, reply) => {
      reply.raw.end('It works!');
    },
  });
});

fastify.listen(process.env.PORT, process.env.IP);

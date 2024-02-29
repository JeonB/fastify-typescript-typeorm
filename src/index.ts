import fastify, {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
} from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

import db from "./decorators/db";
import memo from "./modules/memo/router";
import user from "./modules/user/router";
import auth from "./middlewares/auth";
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({ logger: true });

// test code
// server.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
//   return { hello: "world" };
// });
server.register(db);
server.register(auth);
server.register(memo);
server.register(user);

server.listen({
  host: "localhost",
  port: 3000,
});

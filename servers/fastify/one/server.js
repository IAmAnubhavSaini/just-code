/**
 * npm run start
 * OR
 * node server.js
 * */

import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/", async function handler(req, res) {
    return { hello: "world" };
});

try {
    await app.listen({ port: 3001 });
} catch (e) {
    app.log.error(e);
    process.exit(1);
}

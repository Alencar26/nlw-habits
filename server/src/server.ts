import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
    return 'Hello Word!'
})

app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP server running on port 3333")
});

//TODO  parei no minuto 27:00 -> aula
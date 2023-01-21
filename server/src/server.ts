import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {

    const habtis = await prisma.habit.findMany()

    return habtis
})

app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP server running on port 3333")
});

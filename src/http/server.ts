import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { string, z } from 'zod'
import { createPoll } from './routes/create-polls'
import { getPoll } from './routes/get-polls'

const app = fastify()

app.register(createPoll)
app.register(getPoll)

app.listen({port: 3333}).then(() => {
    console.log('HTTP server running!')
})
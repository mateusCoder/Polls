import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { string, z } from 'zod'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import cookie  from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { pollResults } from '../websocket/poll-results'

const app = fastify()

app.register(require('@fastify/cookie'), {
    secret: "poll-app", 
    hook: 'onRequest'
  })

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(websocket)

app.register(pollResults)

app.listen({port: 3333}).then(() => {
    console.log('HTTP server running!')
})
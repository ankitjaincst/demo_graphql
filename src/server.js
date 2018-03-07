import express from 'express'
import setupMiddware from './middleware'
import { restRouter, graphQLRouter, graphQLRouter2 } from './api'
import { graphiqlExpress } from 'apollo-server-express'
// Declare an app from express
const app = express()
setupMiddware(app)

// setup basic routing for index route
app.use('/api', restRouter)
app.use('/graphql', graphQLRouter)
app.use('/graphql2', graphQLRouter2)
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }))
app.use('/docs2', graphiqlExpress({ endpointURL: '/graphql2' }))

// catch all
app.all('*', (req, res) => {
  res.json({ok: true})
})

export default app

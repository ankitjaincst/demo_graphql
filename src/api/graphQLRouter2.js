import { makeExecutableSchema } from 'graphql-tools'
import { hubType, hubResolvers } from './resources/hub'
import { deliveryBoyType, deliveryBoyResolvers } from './resources/deliveryboy'
import { supervisorType,  supervisorResolvers} from './resources/supervisor'
import merge from 'lodash.merge'
import { graphqlExpress } from 'apollo-server-express'

// root definitions fop GraphQL
const baseSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`

const schema = makeExecutableSchema({
  // all the graphql files
  typeDefs: [
    baseSchema,
    hubType,
    deliveryBoyType
  ],
  // all the resolvers
  resolvers: merge(
    {},
    hubResolvers,
    deliveryBoyResolvers
  )
})


export const graphQLRouter2 = graphqlExpress((req) => (
  {
    schema,
    context: {
      req,
    }
  }))

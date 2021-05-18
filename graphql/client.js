import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_API)

export default client

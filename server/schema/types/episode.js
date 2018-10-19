import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'episode',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: ({ seriesName }) => seriesName
    }
  })
})
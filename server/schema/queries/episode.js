import { GraphQLString } from 'graphql';
import Episode from '../types/episode';

export default {
  type: Episode,
  args: {
    name: {
      type: GraphQLString,
    },
  },
  resolve(_, args) {
    console.log('HERE ARE ARGS::', args);
  },
};
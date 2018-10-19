import { GraphQLString, GraphQLList } from 'graphql';
import Episode from '../types/episode';
import * as store from '../../store';

export default {
  type: new GraphQLList(Episode),
  args: {
    animeName: {
      type: GraphQLString,
    }
  },
  resolve(_, args) {
    return store.find(args);
  },
};
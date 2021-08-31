import { getMovies } from '../db.js';

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(rating, limit),
  },
};

export default resolvers;

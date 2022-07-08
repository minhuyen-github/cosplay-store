const Series = require('./series');
const Product = require('./product');

const resolvers = {
	Query: {
		...Series.resolvers.queries,
		...Product.resolvers.queries,
	},

	Mutation: {
		...Series.resolvers.mutations,
		...Product.resolvers.mutations,
	},
};

module.exports = resolvers;

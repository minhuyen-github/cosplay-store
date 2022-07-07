const Series = require('./series');

const resolvers = {
	Query: {},

	Mutation: {
		...Series.resolvers.mutations,
	},
};

module.exports = resolvers;

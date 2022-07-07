const { prisma } = require('../../prisma/client');

const resolvers = {
	queries: {
		series: () => {
			return prisma.series.findMany();
		},
	},

	mutations: {
		addSeries: (parent, args, context, info) => {
			const name = args.name;
			return prisma.series.create({ data: { name } });
		},
	},
};

module.exports = resolvers;

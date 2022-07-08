const { prisma } = require('../../prisma/client');

const resolvers = {
	queries: {
		series: () => {
			return prisma.series.findMany();
		},

		seriesById: (parent, args, context, info) => {
			return prisma.series.findUnique({
				where: {
					id: args.id,
				},
			});
		},
	},

	mutations: {
		addSeries: (parent, args, context, info) => {
			return prisma.series.create({ data: { name: args.name } });
		},

		deleteSeries: (parent, args, context, info) => {
			return prisma.series.delete({
				where: {
					id: args.id,
				},
			});
		},

		updateSeries: (parent, args, context, info) => {
			return prisma.series.update({
				where: {
					id: args.id,
				},
				data: {
					name: args.updateName,
				},
			});
		},
	},
};

module.exports = resolvers;

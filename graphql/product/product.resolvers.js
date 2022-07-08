const { prisma } = require('../../prisma/client');

const resolvers = {
	queries: {
		products: () => {
			return prisma.product.findMany();
		},

		productById: (parent, args, context, info) => {
			return prisma.product.findUnique({
				where: {
					id: args.id,
				},
			});
		},

		productByName: (parent, args, context, info) => {
			return prisma.product.findUnique({
				where: {
					name: args.name,
				},
			});
		},
	},

	mutations: {
		addProduct: async (parent, args, context, info) => {
			const product = args.product;
			const created = await prisma.product.create({
				data: {
					name: product.name,
					series_id: product.seriesId,
					item_include: product.itemInclude,
					description: product.description,
				},
			});
			const series = await prisma.series.findUnique({
				where: {
					id: created.series_id,
				},
				select: {
					name: true,
				},
			});
			delete created['series_id'];
			const res = {
				...created,
				series: series.name,
			};
			return res;
		},

		deleteProduct: async (parent, args, context, info) => {
			const deleted = await prisma.product.delete({
				where: {
					id: args.id,
				},
			});

			const series = await prisma.series.findUnique({
				where: {
					id: deleted.series_id,
				},
				select: {
					name: true,
				},
			});

			delete deleted['series_id'];
			const res = {
				...deleted,
				series: series.name,
			};
			return res;
		},

		updateProduct: async (parent, args, context, info) => {
			const updated = await prisma.product.update({
				where: {
					id: args.id,
				},
				data: {
					[args.updateField]: args.updateData,
				},
			});

			const series = await prisma.series.findUnique({
				where: {
					id: updated.series_id,
				},
				select: {
					name: true,
				},
			});

			delete updated['series_id'];
			const res = {
				...updated,
				series: series.name,
			};
			return res;
		},

		addProductPhoto: async (parent, args, context, info) => {
			const res = await prisma.product.update({
				where: {
					id: args.id,
				},
				data: {
					img_url: {
						set: [...img_url, args.imgLink],
					},
				},
			});
			return res.img_url;
		},

		deleteProductPhoto: async (parent, args, context, info) => {
			const res = await prisma.product.update({
				where: {
					id: args.id,
				},
				data: {
					img_url: {
						set: img_url.filter((link) => link !== args.imgLink),
					},
				},
			});
			return res.img_url;
		},
	},
};

module.exports = resolvers;

const resolvers = {
	Query: {
		products: () => {
			return prisma.product.findMany();
		},

		productById: (id) => {
			return prisma.product.findUnique({
				where: {
					id: id,
				},
			});
		},

		productByName: (name) => {
			return prisma.product.findUnique({
				where: {
					name: name,
				},
			});
		},
	},

	Mutation: {
		addProduct: (product) => {
			return prisma.product.create({ product });
		},
	},
};

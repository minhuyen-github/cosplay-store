export const typeDef = `
	type OrderItem {
		id: ID!
		orderId: ID!
		productId: ID!
		from: String!
		to: String!
		status: OrderStatus!
		createdAt: String!
		updateAt: String!
	}
`;

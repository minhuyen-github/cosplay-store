export const queries = `
	type Query {
		customers: [Customer!]
		customerById(id: ID!): Customer
		customerByName(name: String!): [Customer!]
		customerOrder(Id: ID!): [Order!]
	}
`;

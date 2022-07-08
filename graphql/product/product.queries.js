const queries = `
    products: [Product!] 
    productById(id: ID!): Product
	  productByName(name: String!): [Product!] 
`;

module.exports = queries;

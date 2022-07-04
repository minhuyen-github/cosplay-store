export const queries = `
  type Query {
    products: [Product!] 
    productById(id: ID!): Product
	  productByName(name: String!): [Product!] 
  }`;

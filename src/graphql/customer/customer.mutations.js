export const mutations = `
  type Mutation {
    addCustomer(customer: CustomerInput!): Customer!
		updateCustomer(id: ID!, name: String, address: String, phone: String): Customer!
		deleteCustomer(id: ID!): Customer!
  }
`;

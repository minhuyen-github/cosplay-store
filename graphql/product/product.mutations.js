export const mutations = `
  type Mutation {
    addProduct(product: ProductInput!): Product!
		deleteProduct(id: ID!): Product!
    updateProduct(id: ID!, name: String, imgUrl: String, series: ID, description: String, price: Int, addOn: AddOn): Product!
  }
`;

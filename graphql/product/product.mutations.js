const mutations = `
    addProduct(product: ProductInput!): Product!
    addProductPhoto(id: ID!, imgLink: String!): [String!]
    deleteProductPhoto(id: ID!, imgLink: String!): [String!]
		deleteProduct(id: ID!): Product!
    updateProduct(id: ID!, updateField: String!, updateData: String!): Product!
`;

module.exports = mutations;

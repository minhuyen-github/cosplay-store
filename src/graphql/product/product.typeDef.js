export const typeDef = `
  type Product {
    id: ID!
    name: String!
    imgUrl: String!
    series: ID!
    description: String!
    price: Int!
    addon: AddOn
    createdAt: Int!
    updatedAt: Int
  }
`;

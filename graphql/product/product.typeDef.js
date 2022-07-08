const typeDef = `
  type Product {
    id: ID!
    name: String!
    imgUrl: [String!]
    series: String!
    description: String!
    item_include: [String!]
    created_at: String!
    updated_at: String
  }
`;

module.exports = typeDef;
